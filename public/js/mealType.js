const mealChoices = {
    dinner: 'dinner',
    lunch: 'lunch',
    breakfast: 'breakfast'
  };

const mealChoice = (choice) => {
    const url = /models/recipe.js/${choice}
    fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));;
};


router.post('/recipe', async (req,res) => {
    if (choice === mealChoices.dinner) {
    } else if (choice === mealChoices.lunch) {
    } else if (choice === mealChoices.breakfast) {
    } else {
    }
});