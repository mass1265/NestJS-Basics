import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  userName:string;

  @IsString()
  @IsNotEmpty()
  firstName:string;

  @IsString()
  @IsNotEmpty()
  lastName:string;

  @IsEmail()
  email:string;

  @IsString()
  @IsNotEmpty()
  password:string;

  // @IsNotEmpty()
  // @IsDate()
  // created_at:Date;

  // @IsNotEmpty()
  // @IsDate()
  // updated_at:Date;
}
