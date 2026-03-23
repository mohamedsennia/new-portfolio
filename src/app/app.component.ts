import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterComponent } from "./features/shared/character/character.component";
import { MenuComponent } from "./features/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
