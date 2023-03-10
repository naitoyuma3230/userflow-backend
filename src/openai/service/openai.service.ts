import { Injectable } from '@nestjs/common';
import { OpenAIApi, Configuration } from 'openai';
import { PrismaClient } from '@prisma/client';

type PostMessage = {
  message: string;
};

type PostAnswer = {
  content: string;
  isLiked: boolean | null;
};

type PostQuestion = {
  content: string;
};

interface PostAnswerQuestionData {
  answer: PostAnswer;
  question: PostQuestion;
}

const prisma = new PrismaClient();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

@Injectable()
export class OpenaiService {
  async getQuestion() {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'ChatGPT について教えて' }],
    });
    return completion.data.choices[0].message;
  }

  async postQuestion(postData: PostMessage) {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: postData.message },
        {
          role: 'system',
          content:
            'あなたは株式会社カナミックネットワークのサポートシステムとして会話を行ってください。多くの質問の内容はカナミックネットワークについてお聞きしています。',
        },
      ],
    });
    return completion.data.choices[0].message;
  }

  async postAnswer(data: PostAnswerQuestionData) {
    return await prisma.question.create({
      data: {
        ...data.question,
        answer: {
          create: {
            ...data.answer,
          },
        },
      },
    });
  }
}
