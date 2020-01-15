import { Component } from '@angular/core';

class Pizza {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  pizza: Pizza = {
    id: 1,
    name: 'reine',
    price: 12
  }
}
