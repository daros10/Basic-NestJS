import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioControler} from "./UsuarioControler";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log.middleware";
import {UsuarioService} from "./usuario.service";


@Module({
  imports: [
      //otros modulos
  ],
    providers:[
        UsuarioService
    ],
  controllers: [ //controlador
      AppController,
      UsuarioControler,
      ParametrosController
  ],

  components: [],
})
export class AppModule implements NestModule{
    nombreAplicacion = 'EPN';
    configure(consumer: MiddlewaresConsumer): void{
        consumer.apply(LogMiddleware).with(this.nombreAplicacion, 1998).forRoutes(UsuarioControler,AppController,ParametrosController);
    }
}
