import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioControler} from "./UsuarioControler";

@Module({
  imports: [
      //otros modulos
  ],
  controllers: [ //controlador
      AppController,
      UsuarioControler
  ],
  components: [],
})
export class AppModule {}
