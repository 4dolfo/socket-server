import { Socket } from "socket.io";
import { UsuariosLista } from "../classes/usuario-lista";
import { Usuario } from "../classes/usuario";

export const UsuariosConectados = new UsuariosLista();


export const conectarCliente = (cliente: Socket) => {
    const usuario = new Usuario(cliente.id);
    UsuariosConectados.agregar(usuario);

}


export const desconectar = (cliente: Socket) => {
    cliente.on("disconnect", () => {
        console.log("Cliente desconectado");
        UsuariosConectados.borrarUsuario(cliente.id);
    });
}
//escuchar mensajes
export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on("mensaje", (payload: { de: string, cuerpo: string }) => {
        console.log("Mensaje recibido", payload);
        io.emit('mensaje-nuevo', payload);
    });
}
//configurar usuario
export const configurarUsuario = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on("configurar-usuario", (payload: { nombre: string }, callback: Function) => {
        UsuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        callback({
            ok: true,
            mensaje: "Usuario " + payload.nombre + ", configurado!"
        });
    });
}