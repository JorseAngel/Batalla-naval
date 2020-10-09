"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordenada = void 0;
var Coordenada = /** @class */ (function () {
    function Coordenada(posX, posY) {
        this._posX = posX;
        this._posY = posY;
    }
    Object.defineProperty(Coordenada.prototype, "posX", {
        get: function () {
            return this._posX;
        },
        set: function (posX) {
            this._posX = posX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordenada.prototype, "posY", {
        get: function () {
            return this._posY;
        },
        set: function (posY) {
            this._posY = posY;
        },
        enumerable: false,
        configurable: true
    });
    return Coordenada;
}());
exports.Coordenada = Coordenada;
//# sourceMappingURL=coordenada.js.map