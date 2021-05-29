var sadrzaj = {
  "Recepti": [
    {
      "recept": "Avocado & black bean eggs",
      "kalorije": 356
    }, {
      "recept": "Summer fish stew",
      "kalorije": 325
    }, {
      "recept": "Greek salad",
      "kalorije": 300
    }, {
      "recept": "Sweet potato & cauliflower lentil bowl",
      "kalorije": 350
    }, {
      "recept": "Thai fried prawn & pineapple rice",
      "kalorije": 311
    }, {
      "recept": "Chipotle chicken tacos with pineapple salsa",
      "kalorije": 392
    }, {
      "recept": "Chicken casserole",
      "kalorije": 382
    }, {
      "recept": "Salmon veggie bowl",
      "kalorije": 392
    }, {
      "recept": "Greek-style roast fish",
      "kalorije": 388
    }, {
      "recept": "Prawn, fennel & rocket risotto",
      "kalorije": 391
    }, {
      "recept": "Spicy meatballs with chilli black beans",
      "kalorije": 376
    }, {
      "recept": "Blueberry muffins",
      "kalorije": 138
    }, {
      "recept": "Pancakes",
      "kalorije": 290
    }, {
      "recept": "Fresh fruit patter with yogurt",
      "kalorije": 104
    }, {
      "recept": "Chicken or tofu tandoori",
      "kalorije": 292
    }, {
      "recept": "Basic curry",
      "kalorije": 324
    }, {
      "recept": "Chicken fajitas ",
      "kalorije": 396
    }, {
      "recept": "Chickpea salad recipe",
      "kalorije": 280
    }, {
      "recept": "Creamy tomato courgetti",
      "kalorije": 395
    }, {
      "recept": "Štrukli",
      "kalorije": 1000
    }
  ]
}
var n = document.getElementById('naziv');
var k = document.getElementById('kalorije');

function drugi(){
  for(i = 0; i < Math.floor((Math.random() * 50) + 1); i++){
    n.innerHTML = sadrzaj.Recepti[i].recept;
    k.innerHTML = sadrzaj.Recepti[i].kalorije + ' kcal';
  }
}


