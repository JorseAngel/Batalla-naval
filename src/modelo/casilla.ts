import { Coordenada } from "./coordenada";
import { Estado } from "./estado";

export class Casilla {
    constructor(private _coordenada:Coordenada, private _estado: Estado){}

    /**
     * Getter coordenada
     * @return {Coordenada}
     */
	public get coordenada(): Coordenada {
		return this._coordenada;
	}

    /**
     * Setter coordenada
     * @param {Coordenada} value
     */
	public set coordenada(value: Coordenada) {
		this._coordenada = value;
    }
    
     /**
     * Getter estado
     * @return {Estado}
     */
	public get estado(): Estado {
		return this._estado;
	}

    /**
     * Setter estado
     * @param {Estado} value
     */
	public set estado(value: Estado) {
		this._estado = value;
	}

}