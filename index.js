const myRecipes= [
    {
        idMeal: 1,
        strMeal: "Spaghetti Aglio e Olio ala Michael Leo",
        strMealThumb: "images/spaghettiaglioeolio.jpg",
        strArea: "Italian",
        strCategory: "Pasta",
        strIngridient1: "Spaghetti",
        strIngridient2: "Garlic",
        strIngridient3: "Olive Oil",
        strIngridient4: "Bacon",
        strIngridient5: "Chili Flakes",
        steps: [
            "1. Boil spaghetti in salted water until al dente",
            "2. In a pan, heat olive oil and sauté garlic until golden",
            "3. Add cooked spaghetti to the pan, along with bacon and chili flakes",
            "4. Toss everything together and serve hot.",
        ]
    },
    {
        idMeal: 2,
        strMeal: "Spaghetti Aglio e Olio ala Rafa Akhdan",
        strMealThumb: "images/spaghettiaglioeolio.jpg",
        strArea: "Italian",
        strCategory: "Pasta",
        strIngridient1: "Spaghetti",
        strIngridient2: "Sambel Bu Rudi",
        strIngridient3: "Bakso",
        steps: "1. Boil spaghetti in salted water until al dente. 2. In a pan, heat sambel bu rudi and add bakso. 3. Toss in the cooked spaghetti and mix well."
    },
    {
        idMeal: 3,
        strMeal: "Spaghetti Bolognese",
        strMealThumb: "images/spaghettibolognese.jpg",
        strArea: "Italian",
        strCategory: "Pasta",
        strIngridient1: "Spaghetti",
        strIngridient2: "Ground Beef",
        strIngridient3: "Tomato Sauce",
        strIngridient4: "Onion",
        strIngridient5: "Garlic",
        steps: [
            "1. Cook spaghetti in salted water until al dente",
            "2. In a pan, sauté onion and garlic until fragrant",
            "3. Add ground beef and cook until browned",
            "4. Pour in tomato sauce and simmer for 10 minutes",
            "5. Serve sauce over spaghetti."
        ]
    },
    {
        idMeal: 4,
        strMeal: "Lamian Chilli Oil",
        strMealThumb: "images/lamianchillioil.jpg",
        strArea: "Chinese",
        strCategory: "Noodles",
        strIngridient1: "Lamian Noodles / Any Noodles",
        strIngridient2: "Chili Oil",
        strIngridient3: "Garlic",
        strIngridient4: "Soy Sauce",
        strIngridient5: "Sesame Oil",
        strIngridients6: "Sliced Beef",
        steps: [
            "1. Cook lamian noodles according to package instructions",
            "2. In a bowl, mix chili oil, soy sauce, and sesame oil",
            "3. Toss cooked noodles with the sauce and add sliced beef",
            "4. Garnish with garlic and serve."
        ]
    },
    {
        idMeal: 5,
        strMeal: "Ramyeon Chili Oil",
        strMealThumb: "images/ramyeonchillioil.jpg",
        strArea: "Korean",
        strCategory: "Noodles",
        strIngridient1: "Ramyeon Noodles",
        strIngridient2: "Sesame Oil",
        steps: [
            "1. Cook ramyeon noodles according to package instructions",
            "2. In a bowl, mix sesame oil with the soup packet",
            "3. Toss cooked noodles with the oil mixture and serve"
        ]
    },
    {
        idMeal: 6,
        strMeal: "Samyang Wrap",
        strMealThumb: "images/samyangwrap.jpg",
        strArea: "Korean",
        strCategory: "Noodles",
        strIngridient1: "Samyang Noodles",
        strIngridient2: "Chicken Breast",
        strIngridient3: "Eggs",
        strIngridient4: "Rice Paper",
        steps: [
            "1. Cook samyang according to package instructions",
            "2. In a pan, cook chicken breast until golden brown",
            "3. Make an omelette with eggs",
            "4. Soak rice paper in water until soft",
            "5. Wrap noodles, chicken, and omelette in rice paper",
        ]
    },
    {
        idMeal: 7,
        strMeal: "Creamy Mushroom and Chicken / Pork",
        strMealThumb: "images/creamymushroomchicken.jpg",
        strArea: "Western",
        strCategory: "Stew",
        strIngridient1: "Chicken Breast / Pork",
        strIngridient2: "Mushrooms",
        strIngridient3: "Cream Base",
        strIngridient4: "Totole Chicken Powder",
        steps: [
            "1. In a pan, sauté chicken or pork until golden brown",
            "2. Add mushrooms and cook until soft",
            "3. Pour in cream base and add totol chicken powder",
            "4. Simmer until sauce thickens and serve."
        ]
    },
    { 
        idMeal: 8,
        strMeal: "Kwetiau Siram",
        strMealThumb: "images/kwetiausiram.jpg",
        strArea: "Chinese",
        strCategory: "Noodles",
        strIngridient1: "Kwetiau Noodles",
        strIngridient2: "Soy Sauce",
        strIngridient3: "Sliced Beef",
        strIngridient4: "Garlic",
        strIngridient5: "Maizena",
        strIngridient6: "Eggs",
        steps: [
            "1. Cook kwetiau noodles according to package instructions",
            "2. In a pan, sauté garlic and sliced beef until fragrant",
            "3. Add soy sauce and maizena to thicken the sauce",
            "4. Toss in cooked kwetiau and mix well",
            "5. Serve hot."
        ]
    },
    {
        idMeal: 9,
        strMeal: "Chopped Steak",
        strMealThumb: "images/choppedsteak.jpg",
        strArea: "Western",
        strCategory: "Steak",
        strIngridient1: "Beef Steak",
        strIngridient2: "Soy Sauce",
        strIngridient3: "Butter",
        strIngridient4: "Onion",
        steps: [
            "1. Season beef steak with soy sauce and let it marinate",
            "2. In a pan, melt butter and sauté onion until golden",
            "3. Add marinated beef and cook to desired doneness",
            "4. Serve with sautéed onions on top."
        ]
    },
    {
        idMeal: 10,
        strMeal: "Roasted Potatoes",
        strMealThumb: "images/roastedpotatoes.jpg",
        strArea: "Western",
        strCategory: "Side Dish",
        strIngridient1: "Potatoes",
        strIngridient2: "Olive Oil",
        strIngridient3: "Onion",
        strIngridient4: "Bacon",
        strIngridient5: "Garlic",
        strIngridient6: "Chili Flakes",
        steps: [
            "1. Cut potatoes into wedges and toss with olive oil, garlic, and chili flakes",
            "3. Spread on a baking sheet and roast for 30-40 minutes until golden",
            "4. Serve with sautéed onion and bacon."
        ]
    },
    {
        idMeal: 11,
        strMeal: "Mashed Potatoes",
        strMealThumb: "images/mashedpotatoes.jpg",
        strArea: "Western",
        strCategory: "Side Dish",
        strIngridient1: "Potatoes",
        strIngridient2: "Butter",
        strIngridient3: "Milk",
        strIngridient4: "Salt",
        strIngridient5: "Pepper",
        steps: [
            "1. Boil potatoes until tender, then drain",
            "2. Mash potatoes with butter, milk, salt, and pepper",
            "3. Serve warm."
        ]
    },
    {
        idMeal: 12,
        strMeal: "Chinese Fried Rice",
        strMealThumb: "images/friedrice.jpg",
        strArea: "Chinese",
        strCategory: "Rice",
        strIngridient1: "Rice",
        strIngridient2: "Soy Sauce",
        strIngridient3: "Eggs",
        strIngridient4: "Lapcheong",
        strIngridient5: "Spam",
        strIngridient6: "Bakso Ikan",
        strIngridient7: "Sambel Bu Rudi",
        steps: [
            "1. Cook rice and let it cool",
            "2. In a pan, scramble eggs and set aside",
            "3. Sauté lapcheong, spam, and bakso ikan until golden",
            "4. Add rice and soy sauce and sambel bu rudi, mix well",
            "5. Stir in scrambled eggs and serve hot."
        ]
    },
    {
        idMeal: 13,
        strMeal: "Nasi Goreng Kecap",
        strMealThumb: "images/nasigorengkecap.jpg",
        strArea: "Indonesian",
        strCategory: "Rice",
        strIngridient1: "Rice",
        strIngridient2: "Soy Sauce",
        strIngridient3: "Eggs",
        strIngridient4: "Lapcheong",
        strIngridient5: "Spam",
        strIngridient6: "Bakso Ikan",
        strIngridient7: "Oyster Sauce",
        strIngridient8: "Sweet Soy Sauce",
        steps: [
            "1. Cook rice and let it cool",
            "2. In a pan, scramble eggs and set aside",
            "3. Sauté lapcheong, spam, and bakso ikan until golden",
            "4. Add rice, soy sauce, oyster sauce, and sweet soy sauce, mix well",
            "5. Stir in scrambled eggs and serve hot."
        ]
    },
    {
        idMeal: 14,
        strMeal: "Rawon",
        strMealThumb: "images/rawon.jpg",
        strArea: "Indonesian",
        strCategory: "Soup",
        strIngridient1: "Beef",
        strIngridient2: "Bumbu Rawon",
        steps: [
            "1. In a pot, boil beef until tender",
            "2. Add bumbu rawon and simmer for 30 minutes",
            "3. Serve hot with rice and kerupuk."
        ]
    },
    {
        idMeal: 15,
        strMeal: "Lazy Mandu",
        strMealThumb: "images/lazymandu.jpg",
        strArea: "Korean",
        strCategory: "Snack",
        strIngridient1: "Mandu Skin",
        strIngridient2: "Ground Beef",
        strIngridient3: "Garlic",
        strIngridient4: "Eggs",
        strIngridient5: "Sesame Oil",
        strIngridient6: "Soy Sauce",
        steps: [
            "1. In a bowl, add 2tbsp of sesame oil, and 1 tbsp of soy sauce",
            "2. In a pan, sauté garlic and ground beef and eggs until cooked",
            "3. Rip mandu skin into small pieces and boil them in water",
            "4. Add the mandu skin to the bowl and pour the beef mixture on top",
            "5. Mix well and serve hot."
        ]
    },
    {
        idMeal: 16,
        strMeal: "Soy Sauce Braised Eggs",
        strMealThumb: "images/soysaucebraisedegg.jpg",
        strArea: "Korean",
        strCategory: "Side Dish",
        strIngridient1: "Eggs / Quail Eggs",
        strIngridient2: "Soy Sauce",
        strIngridient3: "Sugar",
        strIngridient4: "Vinegar",
        strIngridient5: "Chilli",
        strIngridient6: "Water",
        steps: [
            "1. Boil eggs until hard-boiled, then peel",
            "2. In a pot, mix soy sauce, sugar, vinegar, and water",
            "3. Add boiled eggs and chili to the pot",
            "4. Simmer for 30 minutes until eggs are infused with flavor",
            "5. Serve as a side dish."
        ]
    },
    {
        idMeal: 17,
        strMeal: "Honey Soy Sauce Butter Chicken",
        strMealThumb: "images/honeysaucebutterchicken.jpg",
        strArea: "Western",
        strCategory: "Chicken",
        strIngridient1: "Chicken Breast",
        strIngridient2: "Honey",
        strIngridient3: "Soy Sauce",
        strIngridient4: "Butter",
        strIngridient5: "Garlic",
        strIngridient6: "Chili Flakes",
        strIngridient7: "Maizena",
        strIngridient8: "Flour",
        steps: [
            "1. Marinade chicken breast and coat with flour and maizena",
            "2. Fry chicken until golden brown",
            "3. In a pan, melt butter and sauté garlic until fragrant",
            "4. Add honey, soy sauce, and chili flakes to the pan",
            "5. Add fried chicken to the sauce and coat well",
            "6. Serve hot."
        ]
    },
    {
        idMeal: 18,
        strMeal: "Tahu Cireng",
        strMealThumb: "images/tahucireng.jpg",
        strArea: "Indonesian",
        strCategory: "Snack",
        strIngridient1: "Tofu",
        strIngridient2: "Tapioca Flour",
        strIngridient3: "Garlic",
        steps: [
            "1. Blend tofu and garlic until smooth",
            "2. Mix in tapioca flour and form into small balls",
            "3. Fry until golden brown and serve with cabe kecap."
        ]
    },
    {
        idMeal: 19,
        strMeal: "Oyakodon",
        strMealThumb: "images/oyakodon.jpg",
        strArea: "Japanese",
        strCategory: "Rice",
        strIngridient1: "Chicken Breast",
        strIngridient2: "Eggs",
        strIngridient3: "Soy Sauce",
        strIngridient4: "Mirin",
        strIngridient5: "Onion",
        steps: [
            "1. In a pan, sauté onion until translucent",
            "2. Add chicken and cook until browned",
            "3. Pour in soy sauce and mirin, then add beaten eggs",
            "4. Cook until eggs are set and serve over rice."
        ]
    },
    {
        idMeal: 20, 
        strMeal: "Beef Pepper Lunch",
        strMealThumb: "images/beefpepperlunch.jpg",
        strArea: "Japanese",
        strCategory: "Rice",
        strIngridient1: "Beef",
        strIngridient2: "Rice",
        strIngridient3: "Soy Sauce",
        strIngridient4: "Honey",
        strIngridient5: "Garlic",
        strIngridient6: "Butter",
        strIngridient7: "Onion",
        steps: [
            "1. In a pan, melt butter and sauté onion until golden",
            "2. Add beef and cook until browned",
            "3. Pour in soy sauce and honey, mix well",
            "4. Serve over butter rice and enjoy."
        ]
    },
    {
        idMeal: 21, 
        strMeal: "Ungkep Ampela",
        strMealThumb: "images/ungkepampela.jpg",
        strArea: "Indonesian",
        strCategory: "Chicken",
        strIngridient1: "Ampela",
        strIngridient2: "Salt",
        strIngridient3: "Garlic Powder",
        strIngridient4: "Kunyit Powder",
        strIngridient5: "Totole Chicken Powder",
        steps: [
            "1. Clean ampela and marinate with salt, garlic powder, kunyit powder, and totol chicken powder",
            "2. In a pot, add marinated ampela and water",
            "3. Cook until tender until the water evaporates",
            "4. Fry until golden brown and serve hot."
        ]
    },
    {
        idMeal: 22,
        strMeal: "Ayam Tim",
        strMealThumb:"images/ayamtim.jpg",
        strArea: "Indonesian",
        strCategory: "Chicken",
        strIngridient1: "Chicken",
        strIngridient2: "Garlic",
        strIngridient3: "Oil",
        strIngridient4: "Chicken Powder",
        strIngridient5: "Salt",
        steps: [
            "1. In a pan, sauté garlic until fragrant",
            "2. Add chicken and cook until browned",
            "3. Pour in water and add chicken powder and salt",
            "4. Simmer until chicken is cooked through",
            "5. Serve hot with rice."
        ]
    },
    {
        idMeal: 23,
        strMeal: "Rice Paper Hakau",
        strMealThumb: "images/ricepaperhakau.jpg",
        strArea: "Chinese",
        strCategory: "Snack",
        strIngridient1: "Rice Paper",
        strIngridient2: "Ground Shrimp",
        strIngridient3: "Salt",
        strIngridient4: "Totole Chicken Powder",
        steps: [
            "1. In a bowl, mix ground shrimp with salt and totol chicken powder",
            "2. Soak rice paper in water until soft",
            "3. Place shrimp mixture on rice paper and fold",
            "4. Steam for 10-15 minutes until cooked",
            "5. Serve with soy sauce."
        ]
    },
    {
        idmeal: 24,
        strMeal: "Caesar Salad",
        strMealThumb: "images/caesarsalad.jpg",
        strArea: "Western",
        strCategory: "Salad",
        strIngridient1: "Lettuce",
        strIngridient2: "Croutons",
        strIngridient3: "Parmesan Cheese",
        strIngridient4: "Caesar Dressing",
        strIngridient5: "Chicken Breast",
        strIngridient6: "Bacon",
        strIngridient7: "Eggs",
        strIngridient8: "Baby Tomatoes",
        steps: [
            "1. In a bowl, mix lettuce, croutons, baby tomatoes, and parmesan cheese",
            "2. Cook chicken breast and bacon until golden",
            "3. Add to the salad and drizzle with caesar dressing",
            "4. Top with boiled eggs and serve."
        ]
    },
    {
        idMeal: 25,
        strMeal: "French Toast",
        strMealThumb: "images/frenchtoast.jpg",
        strArea: "Western",
        strCategory: "Snack",
        strIngridient1: "Bread",
        strIngridient2: "Eggs",
        strIngridient3: "Milk",
        strIngridient4: "Sugar",
        strIngridient5: "Butter",
        steps: [
            "1. In a bowl, whisk eggs, milk, and sugar",
            "2. Dip bread slices in the mixture",
            "3. In a pan, melt butter and cook bread until golden on both sides",
            "4. Serve with syrup or powdered sugar."
        ]
    },
    {
        idMeal: 26,
        strMeal: "Banana Pancakes",
        strMealThumb: "images/bananapancakes.jpg",
        strArea: "Western",
        strCategory: "Snack",
        strIngridient1: "Bananas",
        strIngridient2: "Flour",
        strIngridient3: "Eggs",
        strIngridient4: "Milk",
        strIngridient5: "Baking Powder",
        strIngridient6: "Sugar",
        strIngridient7: "Butter",
        steps: [
            "1. In a bowl, mash bananas and mix with flour, eggs, milk, baking powder, and sugar",
            "2. In a pan, melt butter and pour in the batter",
            "3. Cook until bubbles form on the surface, then flip and cook until golden",
            "4. Serve with syrup or fresh fruit."
        ]
    },
    {
        idMeal: 27,
        strMeal: "Miyeok Guk",
        strMealThumb: "images/miyeokguk.jpg",
        strArea: "Korean",
        strCategory: "Soup",
        strIngridient1: "Miyeok (Seaweed)",
        strIngridient2: "Beef",
        strIngridient3: "Garlic",
        strIngridient4: "Soy Sauce",
        strIngridient5: "Sesame Oil",
        strIngridient6: "Salt",
        strIngridient7: "Water",
        steps: [
            "1. Soak miyeok in water until soft",
            "2. In a pot, boil beef until tender, then remove",
            "3. Add soaked miyeok to the pot with water and soy sauce",
            "4. Simmer for 30 minutes, then add garlic and sesame oil",
            "5. Serve hot with rice."
        ]
    },
    {
        idMeal: 28,
        strMeal: "Pisang Goreng",
        strMealThumb: "images/pisanggoreng.jpg",
        strArea: "Indonesian",
        strCategory: "Snack",
        strIngridient1: "Bananas",
        strIngridient2: "Flour",
        strIngridient3: "Sugar",
        strIngridient4: "Salt",
        strIngridient5: "Water",
        strIngridient6: "Oil",
        steps: [
            "1. In a bowl, mix flour, sugar, salt, and water to make a batter",
            "2. Dip bananas in the batter and coat well",
            "3. In a pan, heat oil and fry bananas until golden brown",
            "4. Drain on paper towels and serve hot."
        ]
    },
    {
        idMeal: 29, 
        strMeal: "Beef Enoki Roll",
        strMealThumb: "images/beefenokiroll.jpg",
        strArea: "Japanese",
        strCategory: "Snack",
        strIngridient1: "Beef",
        strIngridient2: "Enoki Mushrooms",
        strIngridient3: "Soy Sauce",
        strIngridient4: "Garlic",
        strIngridient5: "Sesame Oil",
        strIngridient6: "Salt",
        strIngridient7: "Pepper",
        steps: [
            "1. Wrap enoki mushrooms with beef slices",
            "2. In a pan, heat sesame oil and sauté garlic until fragrant",
            "3. Add beef rolls and cook until browned",
            "4. Pour in soy sauce and season with salt and pepper",
            "5. Serve hot."
        ]
    },
    {
        idMeal: 30,
        strMeal: "Soy Sauce Chicken",
        strMealThumb: "images/soysaucechicken.jpg",
        strArea: "Chinese",
        strCategory: "Chicken",
        strIngridient1: "Chicken",
        strIngridient2: "Soy Sauce",
        strIngridient3: "Garlic",
        strIngridient4: "Chilli Flakes",
        steps: [
            "1. In a bowl, mix soy sauce, garlic, and chili flakes",
            "2. Marinate chicken in the mixture for 30 minutes",
            "3. In a pan, heat oil and cook marinated chicken until golden",
            "4. Serve hot with rice."
        ]
    },
    {
        idMeal: 31, 
        strMeal: "Stir Fried Miso Udon",
        strMealThumb: "images/stirfriedmisoudon.jpg",
        strArea: "Japanese",
        strCategory: "Noodles",
        strIngridient1: "Udon Noodles",
        strIngridient2: "Miso Paste",
        strIngridient3: "Chilli Oil",
        strIngridient4: "Garlic",
        strIngridient5: "Boiled Egg",
        strIngridient6: "Fish Eggs",
        strIngridient7: "Seaweed",
        steps: [
            "1. Cook udon noodles according to package instructions",
            "2. In a pan, heat chili oil and sauté garlic until fragrant",
            "3. Add miso paste and cooked udon, mix well",
            "4. Top with boiled egg, fish eggs, and seaweed",
            "5. Serve hot."
        ]
    },
    {
        idMeal: 32,
        strMeal: "Steamed Egg",
        strMealThumb: "images/steamedegg.jpg",
        strArea: "Korean",
        strCategory: "Snack",
        strIngridient1: "Eggs",
        strIngridient2: "Water",
        strIngridient3: "Salt",
        strIngridient4: "Sesame Oil",
        strIngridient5: "Soy Sauce",
        steps: [
            "1. In a bowl, whisk eggs with water and salt",
            "2. Pour the mixture into a heatproof dish",
            "3. Steam for 15-20 minutes until set",
            "4. Drizzle with sesame oil and soy sauce before serving."
        ]
    },
    {
        idMeal: 33,
        strMeal: "Curry Udon",
        strMealThumb: "images/curryudon.jpg",
        strArea: "Japanese",
        strCategory: "Noodles",
        strIngridient1: "Udon Noodles",
        strIngridient2: "Curry Paste",
        strIngridient3: "Boiled Egg",
        strIngridient4: "Onion Flakes",
        steps: [
            "1. Cook udon noodles according to package instructions",
            "2. In a pot, mix curry paste with water and bring to a boil",
            "3. Add cooked udon and mix well",
            "4. Top with boiled egg and onion flakes before serving."
        ]
    },
    {
        idMeal: 34,
        strMeal: "Mac and Cheese",
        strMealThumb: "images/macandcheese.jpg",
        strArea: "Western",
        strCategory: "Snack",
        strIngridient1: "Macaroni",
        strIngridient2: "Cheddar Cheese",
        strIngridient3: "Milk",
        strIngridient4: "Butter",
        steps: [
            "1. Cook macaroni according to package instructions",
            "2. In a pot, melt butter and add milk",
            "3. Stir in cheddar cheese until melted",
            "4. Add cooked macaroni and mix well",
            "5. Serve hot."
        ]
    },
    {
        idMeal: 35,
        strMeal: "Veggies Frittata",
        strMealThumb: "images/veggiesfrittata.jpg",
        strArea: "Western",
        strCategory: "Snack",
        strIngridient1: "Eggs",
        strIngridient2: "Spinach",
        strIngridient3: "Baby Tomatoes",
        strIngridient4: "Chilli Flakes",
        steps: [
            "1. In a bowl, whisk eggs and season with salt and pepper",
            "2. In a pan, sauté spinach and baby tomatoes until soft",
            "3. Pour in the egg mixture and cook until set",
            "4. Sprinkle with chili flakes before serving."
        ]
    },
    {
        idMeal: 36,
        strMeal: "Rendang",
        strMealThumb: "images/rendang.jpg",
        strArea: "Indonesian",
        strCategory: "Stew",
        strIngridient1: "Beef",
        strIngridient2: "Coconut Milk",
        strIngridient3: "Rendang Spice Paste",
        steps: [
            "1. In a pot, add beef and rendang spice paste",
            "2. Pour in coconut milk and bring to a boil",
            "3. Simmer until beef is tender and sauce thickens",
            "4. Serve hot with rice."
        ]
    },
    {
        idMeal: 37,
        strMeal: "Sambel Cumi",
        strMealThumb: "images/sambelcumi.jpg",
        strArea: "Indonesian",
        strCategory: "Seafood",
        strIngridient1: "Cumi",
        strIngridient2: "Chilli",
        strIngridient3: "Garlic",
        strIngridient4: "Shrimp Pepper Salt",
        strIngridient5: "Oil",
        strIngridient6: "Tomato",
        steps: [
            "1. Clean cumi and cut into small pieces",
            "2. In a pan, sauté garlic, tomatoes and ground chili until fragrant",
            "3. Add cumi and shrimp pepper salt, cook until done",
            "4. Serve hot with rice."
        ]
    },
    {
        idMeal: 38,
        strMeal: "Capcay",
        strMealThumb: "images/capcay.jpg",
        strArea: "Chinese",
        strCategory: "Vegetable",
        strIngridient1: "Carrot",
        strIngridient2: "Broccoli",
        strIngridient3: "Bakso",
        strIngridient4: "Chicken",
        strIngridient5: "Mushroom",
        strIngridient6: "Maizena",
        strIngridient7: "Soy Sauce",
        strIngridient8: "Oyster Sauce",
        steps: [
            "1. In a pan, sauté chicken and bakso until golden",
            "2. Add carrots, broccoli, and mushrooms, cook until tender",
            "3. Mix soy sauce, oyster sauce, and maizena with water",
            "4. Pour the sauce over the vegetables and stir well",
            "5. Serve hot with rice."
        ]
    },
    {
        idMeal: 39, 
        strMeal: "Sambel Goreng Ampela",
        strMealThumb: "images/sambelgorengampela.jpg",
        strArea: "Indonesian",
        strCategory: "Chicken",
        strIngridient1: "Ampela",
        strIngridient2: "Chili",
        strIngridient3: "Garlic",
        strIngridient4: "Shrimp Pepper Salt",
        strIngridient5: "Oil",
        strIngridient6: "Tomato",
        steps: [
            "1. Clean ampela and cut into small pieces",
            "2. In a pan, sauté garlic, tomatoes and ground chili until fragrant",
            "3. Add ampela and shrimp pepper salt, cook until done",
            "4. Serve hot with rice."
        ]
    },
    {
        idMeal: 40,
        strMeal: "Honey Char Siu Chicken",
        strMealThumb: "images/honeycharsiu.jpg",
        strArea: "Chinese",
        strCategory: "Chicken",
        strIngridient1: "Chicken",
        strIngridient2: "Honey",
        strIngridient3: "Soy Sauce",
        strIngridient4: "Garlic",
        strIngridient5: "Hoisin Sauce",
        strIngridient6: "Rice Wine",
        strIngridient7: "Sesame Oil",
        strIngridient8: "Water",
        steps: [
            "1. In a bowl, mix honey, soy sauce, garlic, hoisin sauce, rice wine, sesame oil, and water",
            "2. Marinate chicken in the mixture for 30 minutes",
            "3. In a pan, heat oil and cook marinated chicken until golden",
            "4. Serve hot with rice."
        ]
    },
    {
        idMeal: 41,
        strMeal: "Poffertjes",
        strMealThumb: "images/poffertjes.jpg",
        strArea: "Dutch",
        strCategory: "Snack",
        strIngridient1: "Flour",
        strIngridient2: "Yeast",
        strIngridient3: "Milk",
        strIngridient4: "Sugar",
        strIngridient5: "Butter",
        strIngridient6: "Eggs",
        strIngridient7: "Salt",
        strIngridient8: "Powdered Sugar",
        steps: [
            "1. In a bowl, mix flour, yeast, sugar, and salt",
            "2. In another bowl, whisk eggs and milk together",
            "3. Combine both mixtures and let it rise for 30 minutes",
            "4. In a poffertjes pan, melt butter and pour in the batter",
            "5. Cook until golden brown on both sides",
            "6. Dust with powdered sugar before serving."
        ]
    }
];

document.getElementById("button").addEventListener("click", () => {
    let inputValue = document.getElementById("inputName").value.toLowerCase().trim();
    let details = document.getElementById("details");
    let items = document.getElementById("items");

    details.innerHTML = "";
    items.innerHTML = "";

    const results = myRecipes.filter(recipe =>
        recipe.strMeal.toLowerCase().includes(inputValue)
    );

    if (results.length === 0) {
        document.getElementById("msg").style.display = "block";
    } else {
        document.getElementById("msg").style.display = "none";
        results.forEach(meal => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "m-2 singleItem";
            itemDiv.addEventListener("click", () => showDetails(meal.idMeal));

            const itemInfo = `
                <div class="card" style="width: 12rem;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <div class="card-body text-center">
                        <h5 class="card-text">${meal.strMeal}</h5>
                    </div>
                </div>
            `;
            itemDiv.innerHTML = itemInfo;
            items.appendChild(itemDiv);
        });
    }
});

function showDetails(id) {
    const meal = myRecipes.find(recipe => recipe.idMeal === Number(id));
    if (!meal) return;

    const details = document.getElementById("details");
    details.innerHTML = "";

    const detailsDiv = document.createElement("div");
    const detailsInfo = `
        <div class="card" style="width: 19rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
                <h3 class="card-text">${meal.strMeal}</h3>
                <h6>Ingredients</h6>
                <ul>
                    ${[...Array(10)].map((_, i) => {
                    const ing = meal[`strIngridient${i + 1}`];
                    return ing ? `<li>${ing}</li>` : "";
                    }).join("")}
                </ul>

                <h6>Steps</h6>
                <p>${meal.steps}</p>
            </div>
        </div>
    `;
    detailsDiv.innerHTML = detailsInfo;
    details.appendChild(detailsDiv);
}