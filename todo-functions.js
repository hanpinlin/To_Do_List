//Fetch existing todos from localStorage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
         return JSON.parse(todosJSON)
    }else{
        return []
    }
}

//save todos to localStorage
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Rander application todos based on fillter
const renderTodos = function(todos, filters){

    // first need to find the to-do items that match with the serch text
    const filterTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = todos.filter(function (todo) {
        return !todo.completed
    })

    // remove the duplicate to-do list in div
    document.querySelector('#notes').innerHTML = ''
    document.querySelector('#notes').appendChild(generateSummaryDOM(incompleteTodos))


    filterTodos.forEach(function(todo){
        
        document.querySelector('#notes').appendChild(generateTodoDOM(todo))
    })
    
}


// Get the DOM elements for an individual notes
const generateTodoDOM = function(todo){
    const p =document.createElement('p')
    p.textContent = todo.text
    return p
}

//get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary 
}