import { Injectable } from '@nestjs/common';

// serviceクラスは主要で複雑なビジネスロジックを実行するため、外部からの依存を無くす
// NestにおいてDI:依存性の注入は@Injectableが行う
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
