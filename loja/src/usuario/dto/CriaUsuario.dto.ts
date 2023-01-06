import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CriaUsarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O email informado e invalido' })
  email: string;

  @MinLength(6, { message: 'A precisa ter pelo menos 6 caracteres' })
  senha: string;
}
