"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casilla = void 0;
var Casilla = /** @class */ (function () {
    function Casilla(agua, tocado) {
        this._agua = agua;
        this._tocado = tocado;
    }
    Object.defineProperty(Casilla.prototype, "agua", {
        get: function () {
            return this._agua;
        },
        set: function (agua) {
            this._agua = agua;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casilla.prototype, "tocado", {
        get: function () {
            return this._tocado;
        },
        set: function (tocado) {
            this._tocado = tocado;
        },
        enumerable: false,
        configurable: true
    });
    return Casilla;
}());
exports.Casilla = Casilla;
//# sourceMappingURL=casilla.js.map