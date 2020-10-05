const todos = [{
    text: 'Order cat food',
    completed: true
},{
    text: 'Clean kitchen',
    completed: false
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Finish the class',
    completed: false
},{
    text: 'Push out trash can',
    completed: true
}]

// const paragraphs = document.querySelectorAll("p")

// paragraphs.forEach(function(paragraph){
//     if(paragraph.textContent.includes('the')){
//         paragraph.remove()
//     }
// })


const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})



//add filter result
const filters ={
    searchText:'',
    hideCompleted: false
}



// a function to render the to-do list
const renderTodos = function(todos, filters){

 // first need to find the to-do items that match with the serch text

    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

  

    // remove the duplicate to-do list in div
    document.querySelector('#notes').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#notes').appendChild(summary)


    filterTodos.forEach(function(todo){
        const p =document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#notes').appendChild(p)
    })
    
}

renderTodos(todos, filters)

//add the input in the search column into the filters
document.querySelector('#input1').addEventListener('input', function(e){
    filters.searchText= e.target.value  
    //console.log('e.checked') 
    renderTodos(todos, filters)
})

document.querySelector('#hp').addEventListener('change', function(e) {       
    console.log(e.target.checked)      
    })

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    console.log(e.target.checked)
    renderTodos(todos, filters)
    })

//sumit handler
document.querySelector('#todos-form').addEventListener('submit', function(e){
    //cancel the default form
    e.preventDefault()
    //push new to the array
    todos.push({
        text:e.target.elements.text.value,
        completed: false
    })
    //re-render
    renderTodos(todos, filters)
    e.target.elements.text.value =''

    

    
    

})