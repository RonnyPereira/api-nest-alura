import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsarioDTO) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
  @Get()
  async listUsuarios() {
    return this.usuarioRepository.listar();
  }
}
