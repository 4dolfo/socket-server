import { Usuario } from "./usuario";

export class UsuariosLista {
    private lista: Usuario[] = [];
    constructor() { }
    //Agregar un usuario
    public agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre(id: string, nombre: string) {
        for (const usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log("===== Actualizando Usuario ======");
        console.log(this.lista);
    }

    //obtener lista de usuarios
    public getLista() {
        return this.lista;
    }
    //obtener un usuario
    public getUsuario(id: string) {
        return this.lista.find(usuario => { return usuario.id === id });
    }

    //obtener usuarios de una sala en particular
    public getUsuariosEnSala(sala: string) {
        return this.lista.filter(usuario => {
            return usuario.sala = sala;
        });
    }

    //Borrar usuario
    public borrarUsuario(id: string) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => {
            return usuario.id !== id;
        });
        return tempUsuario;
    }
}