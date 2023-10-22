const n="Hola mundo"; // const variable que se declara una vez y no puede modificarse
console.log(typeof n); // typeof devuelve el tipo de dato que dicha variable contiene

const m="Hola Karem";
console.log(typeof m);
if (typeof n == String && typeof m == String) {
    console.log(true);
}

else {
    console.warn("Tipo de datos inválidos");
}

