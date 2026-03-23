import { Component } from '@angular/core';
import { CharacterComponent } from "../shared/character/character.component";
import { ButtonComponent } from "../shared/button/button.component";
import { NameComponent } from "../shared/name/name.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CharacterComponent, ButtonComponent, NameComponent,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
