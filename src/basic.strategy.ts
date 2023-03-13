import { BasicStrategy as Strategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// Serviceを含めProviderには@InjectableによるDIが行われる
@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  // validateメソッドを定義し、ハードコードした認証情報との一致を調査する
  validate(username: string, password: string): boolean {
    if (username === 'naito' && password === '7110') return true;
    else throw new UnauthorizedException();
  }
}
