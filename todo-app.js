let todos = getSavedTodos()


//add filter result
const filters ={
    searchText:'',
    hideCompleted: false
}


renderTodos(todos, filters)

//add the input in the search column into the filters
document.querySelector('#input1').addEventListener('input', function(e){
    filters.searchText= e.target.value  
    //console.log('e.checked') 
    renderTodos(todos, filters)
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
    saveTodos(todos);
    //re-render
    renderTodos(todos, filters)
    e.target.elements.text.value =''

})