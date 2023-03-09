import { Injectable } from '@nestjs/common';
import { OpenAIApi, Configuration } from 'openai';

type postMessage = {
  message: string;
};

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

  async postQuestion(postData: postMessage) {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: postData.message }],
    });
    return completion.data.choices[0].message;
  }
}
