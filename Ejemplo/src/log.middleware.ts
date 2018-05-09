import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";

@Middleware()
export class LogMiddleware implements NestMiddleware{
    resolve(nombreAplicacion:String, anio:number): ExpressMiddleware {
        return (request, response, next) => {
            const respuesta= {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };
            console.log('******* desde middleware *******',nombreAplicacion,anio);
            console.log(respuesta);
            next(); // ERROR SI NO SE LLAMA
        };
    }

}