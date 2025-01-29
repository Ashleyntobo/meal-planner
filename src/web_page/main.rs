use std::collections::HashMap;
use std::io;

fn main() {
    let meals: HashMap<&str, Vec<&str>> = HashMap::from([
        ("Vegan Tacos", vec!["Corn tortillas", "Black beans", "Avocado", "Tomato", "Red onion"]),
        ("Chickpea Salad Sandwich", vec!["Canned chickpeas", "Vegan mayonnaise", "Dijon mustard"]),
        ("Vegan Buddha Bowl", vec!["Quinoa or brown rice", "Roasted sweet potatoes", "Steamed broccoli"]),
        ("Lentil Soup", vec!["Green or brown lentils", "Onion", "Carrots", "Celery"]),
        ("Vegan Pizza", vec!["Pizza dough", "Tomato sauce", "Vegan mozzarella cheese"]),
        ("Vegan Banana Bread", vec!["Ripe bananas", "All-purpose flour", "Baking soda"]),
        ("Tofu Stir-fry", vec!["Firm tofu", "Soy sauce", "Garlic", "Ginger", "Bell peppers"]),
        ("Vegan Burgers", vec!["Black beans or lentils", "Oats", "Onion", "Garlic"]),
        ("Vegan Chocolate Chip Cookies", vec!["All-purpose flour", "Baking soda", "Vegan chocolate chips"]),
        ("Vegan Mac and Cheese", vec!["Cashews", "Nutritional yeast", "Lemon juice"]),
        ("Chicken Alfredo", vec!["Boneless, skinless chicken breast", "Fettuccine pasta", "Heavy cream"]),
        ("Beef Tacos", vec!["Ground beef", "Taco seasoning", "Flour tortillas", "Shredded cheddar cheese"]),
        ("Egg Salad Sandwich", vec!["Eggs", "Mayonnaise", "Mustard", "Celery"]),
        ("Chicken Caesar Salad", vec!["Romaine lettuce", "Grilled chicken breast", "Croutons"]),
        ("Beef Stir-fry", vec!["Thinly sliced beef", "Soy sauce", "Garlic", "Ginger", "Bell peppers"]),
        ("Shrimp Scampi", vec!["Shrimp", "Spaghetti pasta", "Garlic", "Butter"]),
        ("Pulled Pork Sandwiches", vec!["Pork shoulder", "BBQ sauce", "Onion", "Apple cider vinegar"]),
        ("Chicken Parmesan", vec!["Chicken breasts", "Bread crumbs", "Parmesan cheese"]),
        ("Beef Burgers", vec!["Ground beef", "Salt and pepper", "Burger buns"]),
        ("Fish Tacos", vec!["White fish fillets", "Corn tortillas", "Cabbage", "Cilantro"]),
    ]);
    

    println!("Available Meals:");
for (index, meal) in meals.keys().enumerate() {
    println!("{}. {}", index + 1, meal);
}


println!("\nEnter the number of the meal you'd like to view ingredients for:");

let mut choice to select_meal_index = String::new();
io::stdin().read_line(&mut choice).unwrap();
let choice: usize = choice.trim().parse().unwrap_or(0);

if (1..=meal.len()). contains(&choice) {
    let meal_name = meals.keys().nth(choice - 1);
    if let Some(name) = meal_name {
        println!("\nIngredients for {}:", meal_name);
        if let Some(ingredients) = meals.get(name) {
            for ingredient in ingredients {
                println!("- {}", ingredient);
            }
        }
    }
} else {
    println!("Invalid choice! please enter a valid meal number.");
}
