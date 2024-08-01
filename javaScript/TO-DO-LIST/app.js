let todo = [];
let req = prompt ("Please enter your request");

while (true){
    if (req == "quite"){
        console.log("Quitting Todo App");
        break;
    }
    if (req == "list"){
        console.log ("------");
        for (let i = 0; i < todo.length; i++){
            console.log (i, todo[i]);
        }
        console.log ("-------");
    }else if (req == "add"){
        let task = prompt ("Please enter your task to be add");
        todo.push(task);
        console.log ("task added");
    } else if (req == "delete"){
        let idx = prompt("Please enter the task idx you want to delete");
        todo.splice(idx,1);
        console.log ("task deleted");
    }else {
        console.log("WORNG REQUEST");
    }
    req = prompt ("Please enter your request");
}