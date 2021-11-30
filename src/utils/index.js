const fs = require("fs");
const { json } = require("stream/consumers");
const { string } = require("yargs");


const addMovie = (movieObj) => {
    try {
        const stringyObj = JSON.stringify(movieObj)
        fs.writeFileSync("./storage.json", stringyObj)
    } catch (error) {
        console.log(error);
    }
}

const listMovie = () => {
    try {
        const jsonList = fs.readFileSync("./storage.json")
        const list = JSON.parse(jsonList)
        console.log(list);
    } catch (error) {
        console.log(error);
    }
}

const append = (movieObj) => {
    try {
        const jsonList = fs.readFileSync("./storage.json")
        const storage = JSON.parse(jsonList)
        storage.movies.push(movieObj)
        fs.writeFileSync("./storage.json", JSON.stringify(storage))
    } catch (error) {
        console.log(error);
    }
}

module.exports = { addMovie, listMovie, append }