var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.altura * this.base;
    };
    return Rectangulo;
}());
var clase = new Rectangulo(2, 3);
console.log(clase.calcularArea);
