import { Sentido } from "./sentido";

export class Coordenada{

    //La froma ts para declarar propiedades obligatorias
    constructor(private _x: number, private _y: number){
    }

    public get x(): number{
        return this._x;
    }
    
    public set x(xs: number){
        this._x = xs;
    }
    
    public get y(): number{
        return this._y;
    }
    
    public set y(ys: number){
        this._y = ys;
    }
    
    //Hay cosas java que siempre vienen bien como por ejemplo public para declarar un metodo que se llama equals
    public equals(coordenada: Coordenada): boolean{
        return this._x == coordenada.x && this._y == coordenada.y;
    }

    public mover(direccion: Sentido){
        if (direccion == Sentido.abajo){
            this.bajar();
        }else{
            this.avanzar();
        }
    }

    public bajar(){
        this._y++;
    }

    public avanzar(){
        this._x++;
    }
}