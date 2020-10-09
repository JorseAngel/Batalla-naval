import { Casilla } from "./casilla";
import { Coordenada } from "./coordenada";
import { Estado } from "./estado";
import { Sentido } from "./sentido";

export class Barco {
    private _posiciones: Casilla[] = [];

    constructor(private _size: number, inicial: Coordenada, direccion: Sentido) {
        this.crearBarco(inicial, direccion);

    }

    private crearBarco(inicial: Coordenada, direccion: Sentido) {
        for (let index = 0; index < this.size; index++) {
            this.posiciones.push(new Casilla(new Coordenada(inicial.x, inicial.y), Estado.indemne));
            inicial.mover(direccion);

        }
    }

    public compruebaSolapamiento(casilla: Casilla[]): boolean {
        for (let index = 0; index < casilla.length; index++) {
            for (let indexObject = 0; indexObject < this.posiciones.length; indexObject++) {
               if(this.posiciones[indexObject].coordenada.equals(casilla[index].coordenada)){
                   return true;
               }
            }
            
        }
        return false
    }

    /**
     * Getter posiciones
     * @return {Casilla[] }
     */
    public get posiciones(): Casilla[] {
        return this._posiciones;
    }

    /**
     * Getter size
     * @return {number}
     */
    public get size(): number {
        return this._size;
    }

    /**
     * Setter posiciones
     * @param {Casilla[] } value
     */
    public set posiciones(value: Casilla[]) {
        this._posiciones = value;
    }

    /**
     * Setter size
     * @param {number} value
     */
    public set size(value: number) {
        this._size = value;
    }
}