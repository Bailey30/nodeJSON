const yargs = require("yargs")

const { addMovie, listMovie, append} = require("./utils")

const app = () => {
    if (yargs.argv.add) {
            addMovie({title: yargs.argv.title, actor: yargs.argv.actor})
    } else if (yargs.argv.list) {
        listMovie() 
    
    } 
    else if (yargs.argv.append){
        append({title: yargs.argv.title, actor: yargs.argv.actor})
        console.log("append");
    }
    else {
        console.log("incorrect command");
    }
}

app(yargs.argv)
console.log(yargs.argv);