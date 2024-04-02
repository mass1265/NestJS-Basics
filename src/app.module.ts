import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterModule } from './register/register.module';
import { registerEntity } from './register/register.entity';

@Module({
  imports: [
    LoginModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [registerEntity],
      synchronize: true
    }),
    RegisterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
