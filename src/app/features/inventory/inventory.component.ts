import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { CharacterComponent } from "../shared/character/character.component";

@Component({
  selector: 'app-inventory',
  imports: [NavComponent, CharacterComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
