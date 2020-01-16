import { Component, Input } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  @Input() user: User;
}