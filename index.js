
const Container = require('./class');

const file = new Container('products.txt');

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

    await file.save(product1, product2);

    // const idElegido= await file.getById(id);
    // console.log(idElegido);

    // let products= await file.getAll();
    // console.log(products);

    // await file.deleteById(id);

    // await file.deleteAll();

}

proccesFile();

