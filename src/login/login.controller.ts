import { Body, Controller, Post } from '@nestjs/common';

import { LoginService } from './login.service';
import { LoginDto } from './login.dto';

@Controller('login')
export class LoginController {
    constructor(public loginService: LoginService) { 
    }

    @Post()
    loginStatus(@Body() loginDataList: LoginDto) {
       return this.loginService.loginData(loginDataList)
    }
}
