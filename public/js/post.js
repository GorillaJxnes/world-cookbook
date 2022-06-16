const loginFormHandler = async (e) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    e.preventDefault();
    const steps = document.querySelector('#post-steps').value.trim();
    

   
    
    const myForm = document.querySelector('form');
    let formArray = [];
    for (const element of myForm.elements) {
        formArray.push(element.value);
        // meal = element[myForm.elements.length - 2].value;
        
    }   console.log(formArray);
  
    let ingredientArray = [];
    for (i = 0; i < formArray.length; i++) {
        
        if (i > 1 && i < formArray.length-3){
            ingredientArray.push(formArray[i])
        }

    }
    const name = formArray[0];
    const meal = formArray[formArray.length - 2]
    const ingredients = ingredientArray.join(',');
        

    console.log(name);
    console.log(meal);
    console.log(ingredients);





    
    if (name && ingredients && steps && meal) {
        
        const response = await fetch('/api/posts/newpost', {
            method: 'POST',
            body: JSON.stringify({ name, ingredients, steps, meal }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to Post')
        }
    }
};

document.addEventListener('submit', loginFormHandler);

const addBtn = document.getElementById('addIngredientBtn');

const addIngredient = (e) =>{
    e.preventDefault();
var newLi = document.createElement('li')
var newInput = document.createElement('input')
var ingredientList = document.getElementById('list');

ingredientList.appendChild(newLi);
newLi.appendChild(newInput);
newLi.classList.add('listItem')
newInput.setAttribute('type', 'text');
newInput.setAttribute('name', 'ingredientName');
newInput.classList.add('ingredient');

}


addBtn.addEventListener('click', addIngredient);

