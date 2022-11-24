const fs = require('fs');

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
    }

    save = async (product1, product2) => {
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify([]));
            let data = await fs.promises.readFile(this.fileName, 'utf-8');
            data = JSON.parse(data);
            product1 = { ...product1, id: 1 };
            data.push(product1);
            await fs.promises.writeFile(this.fileName, JSON.stringify(data))
            data = await fs.promises.readFile(this.fileName, 'utf-8');
            data = JSON.parse(data);
            const id= data.map(file => file.id+1)[0];
            product2 = { ...product2, id: id };
            data.push(product2);
            await fs.promises.writeFile(this.fileName, JSON.stringify(data))
        }
        catch (error) {
            console.log(error);
        }
    }

    getById = async (id) => {
        let data = await fs.promises.readFile(this.fileName, 'utf-8');
        data = JSON.parse(data);
        let resultado = data.find((elemento) => elemento.id === id);
        return resultado;
    }

    getAll = async () => {
        let data = await fs.promises.readFile(this.fileName, 'utf-8');
        data = JSON.parse(data);
        return data;
    }

    deleteById = async (id) => {
        let data = await fs.promises.readFile(this.fileName, 'utf-8');
        data = JSON.parse(data);
        let resultado = data.filter((elemento) => elemento.id !== id);
        await fs.promises.writeFile(this.fileName, JSON.stringify(resultado));
    }

    deleteAll = async () => {
        let data=[];
        data = await fs.promises.readFile(this.fileName, 'utf-8');
        data = JSON.parse(data);
        data.splice(0, data.length);
        await fs.promises.writeFile(this.fileName, JSON.stringify(data));
    }

}


module.exports = Contenedor