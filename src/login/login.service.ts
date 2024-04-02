import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';

@Injectable()
export class LoginService {
    constructor() {}

    loginData(data: LoginDto) {
        return { data }
    }
}
