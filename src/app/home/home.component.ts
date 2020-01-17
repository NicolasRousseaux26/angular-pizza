import { Component } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { User } from '../model/user.model';
import { Ingredient } from '../model/ingredient';
import { PizzaService } from '../pizza.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent { 
  selectedPizza: Pizza;
  pizzas: Pizza[] = [];
  number = 2;
  user: User = {
    name: 'Rousseaux',
    firstname: 'Nicolas',
    birthday: '1991-11-26',
    avatar: 'https://image.flaticon.com/icons/png/512/48/48688.png',
    age: null
  };

  ingredients: Ingredient[] = [
    { name: 'tomate', image: 'tomate.jpg', weight: 40, price: 2 },
    { name: 'Olive', image: 'olive.jpg', weight: 5, price: 1 } 
  ];

  selectedIngredients: Ingredient[] = [];

    //
  constructor( private pizzaService: PizzaService) {

   }

  ngOnInit() { 
    this.calculateAge('1991-11-18');   
    this.pizzaService.getPizzas().then(
      pizzas => this.pizzas = pizzas
    ); 
  }

  private calculateAge(date: string): void {
    let currentDate = Date.now(); // 2020-01-16 en timestamp (millisecondes)
    let birthDate = (new Date(this.user.birthday)).getTime(); // 1991-11-18 en timestamp (millisecondes)
    let timeDiff = currentDate - birthDate;
    let age = (new Date(timeDiff)).getFullYear() - 1970;

    this.user.age = age;
  }

  onSelect(pizza: Pizza): void {
    // On récupère la pizza cliquée
    console.log(pizza);
    this.selectedPizza = pizza;
  }

  selectIngredient(event) {
    console.log(event);
    // si l'ingredient et pas encore dans la liste on autorise l'ajoute
    if(!this.selectedIngredients.includes(event)) {
      this.selectedIngredients.push(event);
    }
  }

  deleteIngredient(index: number) {
    event.stopPropagation();
    // on supprime l'index du tableau
    this.selectedIngredients.splice(index, 1)
  }
}


