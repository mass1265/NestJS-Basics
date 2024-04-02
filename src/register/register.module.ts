import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { registerEntity } from './register.entity';

@Module({
    imports: [TypeOrmModule.forFeature([registerEntity])],
    controllers: [RegisterController],
    providers: [RegisterService]
})
export class RegisterModule { }
