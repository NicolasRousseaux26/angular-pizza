import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbarre',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarreComponent  {
  // le menu peut etre ouvert / fermé
  isCollapsed: boolean = false;
  // le titre qui apparait au niveau du logo
  @Input() title: string;
  @Input() color: string = 'light';

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  
  switchTheme() {
    this.color = ('light' == this.color) ? 'dark' : 'light'

  }

}
