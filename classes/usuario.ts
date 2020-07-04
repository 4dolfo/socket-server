export class Usuario {
    public id: string;//id del socket donde se conecta
    public nombre: string;
    public sala: string;
    constructor(id: string) {
        this.id = id;
        this.nombre = "sin-nombre";
        this.sala = "sin-sala";
    }
}