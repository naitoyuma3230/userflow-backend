import { Controller, Post, Get, Body } from '@nestjs/common';
import { OpenaiService } from '../service/openai.service';

type postMessage = {
  message: string;
};

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}
  @Get()
  async getQuestion() {
    return await this.openaiService.getQuestion();
  }
  @Post()
  async postQuestion(@Body() postData: postMessage) {
    return await this.openaiService.postQuestion(postData);
  }
}
