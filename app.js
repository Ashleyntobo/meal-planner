const meals = {
    "Vegan Tacos": [
        "Corn tortillas", "Black beans", "Avocado", "Tomato", "Red onion",
        "Fresh cilantro", "Lime", "Vegan sour cream", "Salsa", "Bell peppers (optional)"
    ],
    "Chickpea Salad Sandwich": [
        "Canned chickpeas", "Vegan mayonnaise", "Dijon mustard", "Red onion",
        "Celery", "Fresh dill", "Lemon juice", "Salt and pepper", "Whole grain bread"
    ],
    "Vegan Buddha Bowl": [
        "Quinoa or brown rice", "Roasted sweet potatoes", "Steamed broccoli",
        "Sliced cucumber", "Carrot ribbons", "Cherry tomatoes", "Hummus",
        "Tahini dressing", "Pumpkin seeds"
    ],
    "Lentil Soup": [
        "Green or brown lentils", "Onion", "Carrots", "Celery", "Garlic",
        "Canned tomatoes", "Vegetable broth", "Spinach or kale", "Bay leaves", "Olive oil"
    ],
    "Vegan Pizza": [
        "Pizza dough (store-bought or homemade with flour, yeast, olive oil)", "Tomato sauce", "Vegan mozzarella cheese",
        "Bell peppers", "Red onion", "Mushrooms", "Spinach", "Black olives", "Fresh basil"
    ],
    "Vegan Banana Bread": [
        "Ripe bananas", "All-purpose flour", "Baking soda", "Baking powder", "Cinnamon",
        "Ground flaxseeds (as egg substitute)", "Maple syrup", "Plant-based milk (almond, soy, oat)", "Vegan butter"
    ],
    "Tofu Stir-fry": [
        "Firm tofu", "Soy sauce", "Garlic", "Ginger", "Bell peppers",
        "Carrots", "Broccoli", "Sesame oil", "Green onions", "Rice (white or brown)"
    ],
    "Vegan Burgers": [
        "Black beans or lentils", "Oats", "Onion", "Garlic", "Carrot (grated)",
        "Ground flaxseed (egg substitute)", "Soy sauce", "Olive oil", "Whole grain buns"
    ],
    "Vegan Chocolate Chip Cookies": [
        "All-purpose flour", "Baking soda", "Vegan chocolate chips", "Plant-based butter",
        "Brown sugar", "Maple syrup", "Ground flaxseeds (egg substitute)", "Vanilla extract", "Salt"
    ],
    "Vegan Mac and Cheese": [
        "Cashews (soaked)", "Nutritional yeast", "Lemon juice", "Garlic powder",
        "Onion powder", "Turmeric", "Mustard", "Plant-based milk (unsweetened)", "Elbow macaroni"
    ],
    "Chicken Alfredo": [
        "Boneless, skinless chicken breast", "Fettuccine pasta", "Heavy cream",
        "Parmesan cheese", "Butter", "Garlic", "Olive oil", "Salt and pepper", "Fresh parsley"
    ],
    "Beef Tacos": [
        "Ground beef", "Taco seasoning (paprika, cumin, chili powder, garlic powder, onion powder)",
        "Flour tortillas or corn tortillas", "Shredded cheddar cheese", "Sour cream",
        "Lettuce", "Tomatoes", "Salsa"
    ],
    "Egg Salad Sandwich": [
        "Eggs", "Mayonnaise", "Mustard", "Celery", "Onion", "Salt and pepper",
        "Paprika", "Whole grain bread"
    ],
    "Chicken Caesar Salad": [
        "Romaine lettuce", "Grilled chicken breast", "Croutons", "Parmesan cheese",
        "Caesar dressing", "Lemon juice"
    ],
    "Beef Stir-fry": [
        "Thinly sliced beef (sirloin or flank steak)", "Soy sauce", "Garlic", "Ginger",
        "Bell peppers", "Snow peas", "Carrots", "Green onions", "Sesame oil", "Rice"
    ],
    "Shrimp Scampi": [
        "Shrimp (peeled and deveined)", "Spaghetti pasta", "Garlic", "Butter", "Olive oil",
        "White wine", "Lemon juice", "Red pepper flakes", "Parsley"
    ],
    "Pulled Pork Sandwiches": [
        "Pork shoulder", "BBQ sauce", "Onion", "Apple cider vinegar", "Brown sugar",
        "Salt and pepper", "Coleslaw", "Sandwich buns"
    ],
    "Chicken Parmesan": [
        "Chicken breasts", "Bread crumbs", "Parmesan cheese", "Mozzarella cheese",
        "Marinara sauce", "Eggs", "Olive oil", "Fresh basil", "Spaghetti"
    ],
    "Beef Burgers": [
        "Ground beef", "Salt and pepper", "Burger buns", "Lettuce", "Tomato",
        "Pickles", "Cheese (cheddar, American)", "Ketchup", "Mustard"
    ],
    "Fish Tacos": [
        "White fish fillets (like cod or tilapia)", "Corn tortillas", "Cabbage (shredded)",
        "Cilantro", "Lime", "Sour cream", "Salsa", "Avocado", "Chili powder"
    ]
};

const mealList = document.getElementById('meal-list');

// Populate the meal list
Object.keys(meals).forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');
    mealDiv.textContent = meal;

    const ingredientsList = document.createElement('ul');
    ingredientsList.classList.add('ingredients');
    meals[meal].forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    mealDiv.addEventListener('click', () => {
        ingredientsList.style.display =
            ingredientsList.style.display === 'none' ? 'block' : 'none';
    });

    mealList.appendChild(mealDiv);
    mealList.appendChild(ingredientsList);
});
