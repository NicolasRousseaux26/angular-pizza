import { Component, OnInit, Input } from '@angular/core';
import {Pizza } from '../model/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {

  @Input() pizza: Pizza;
  }



