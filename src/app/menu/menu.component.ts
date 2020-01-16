import { Component, Input } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() ingredients: Ingredient [] = [];

}
