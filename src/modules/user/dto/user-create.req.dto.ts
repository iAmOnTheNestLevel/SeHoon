import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserCreateReqDTO {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
