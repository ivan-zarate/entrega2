
const Contenedor = require('./class');

const archivo = new Contenedor('products.txt');

let product1 = {
    title: "Apple",
    price: 250,
    thumbnail: "Apple.png"
}

let product2 = {
    title: "Banana",
    price: 290,
    thumbnail: "Banana.png"
}

let id=2;

const proccesFile = async () => {

    await archivo.save(product1, product2);

    // const idElegido= await archivo.getById(id);
    // console.log(idElegido);

    // let products= await archivo.getAll();
    // console.log(products);

    // await archivo.deleteById(id);

    // await archivo.deleteAll();

}

proccesFile();

