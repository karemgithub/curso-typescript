class Rectangulo {
    public base: number
    public altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return this.altura * this.base
    }
}
let clase: Rectangulo = new Rectangulo(2, 3)
console.log(clase.calcularArea)



