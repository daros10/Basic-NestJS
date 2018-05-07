import {Controller, Get, HttpCode, Post, Req, Res} from "@nestjs/common";

@Controller('Usuario')
export class UsuarioControler{
    usuario = {
        nombre:'Dario',
        apellido: 'Herrera',
        edad:25
    };

    usuarios = [];

    @Get('mostrar')
    @HttpCode(202)
    mostrarUsuario(//@Req() request, @Res() response//
        //
        ){
        return this.usuario;
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request, @Res() response){
        return response.status(200).send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(@Req() request, @Res() response){
        const nuevoUsuario = {
            nombre:request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };
        this.usuarios.push(nuevoUsuario);

        return response.status(201).send(nuevoUsuario);
    }


}