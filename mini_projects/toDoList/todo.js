let input = prompt("What would you like to do?");
const todos = ['hello', 'world'];

while(input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt("Enter the new Todo");
        todos.push(newTodo);
        console.log(`${newTodo} added into the list!`);
    } else if (input === 'delete') {
        // convert string to int
        const ind = parseInt(prompt("Enter the ind to delete"));
        
        if (!Number.isNaN(ind)) {
            const elmDeleted = todos.splice(ind, 1);
            console.log(`${elmDeleted} deleted from the list!`);
        } else {
            console.log("Unknown Index!");
        }
    }

    input = prompt("What would you like to do?");
}

console.log("Quit sucessfully!");