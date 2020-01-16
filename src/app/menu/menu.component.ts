import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() ingredients: Array<Ingredient> = [];
  @Output() select: EventEmitter<Ingredient> = new EventEmitter();


  chooseIngredient(ingredient: Ingredient): void {
    this.select.emit(ingredient);
  }
}
