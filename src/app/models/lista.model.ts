import { ListaItem } from './lista-items.models';

export class Lista {
    id: number;
    titulo: string;
    creadoEn: Date;
    terminadaEn: Date;
    terminado: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {
        this.titulo = titulo;
        this.creadoEn = new Date();
        this.terminado = false;
        this.items = [];

        this.id = new Date().getTime();
    }

}
