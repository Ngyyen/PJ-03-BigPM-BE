import { IsDate, IsDateString, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsDateString()
  hire_date: Date;

  @IsNotEmpty()
  @IsInt()
  jobPositionId: number;

  @IsNotEmpty()
  @IsInt()
  officePositionId: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsInt()
  groupId: number;

  @IsOptional()
  @IsString()
  avatarImagePath: string;
}
