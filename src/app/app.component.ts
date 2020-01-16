import { Component } from '@angular/core';
import { Pizza } from './model/pizza.model';
import { User } from './model/user.model';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  selectedPizza: Pizza;
  pizzas: Pizza[] = PIZZAS;
  user: User = {
    name: 'Mota',
    firstname: 'Matthieu',
    birthday: '1991-11-18',
    avatar: 'https://image.flaticon.com/icons/png/512/48/48688.png',
    age: null
  };

  constructor() {
    this.calculateAge('1991-11-18');
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
  }
}