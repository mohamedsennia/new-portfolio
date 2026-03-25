import { Component, inject } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { CharacterComponent } from "../shared/character/character.component";
import { TooltipDirective } from '../../core/directives/tooltip.directive';
import { TechnologieService } from '../../core/services/technologie.service';
import { Technologie } from '../../core/models/technologie.model';

@Component({
  selector: 'app-inventory',
  imports: [NavComponent, CharacterComponent,TooltipDirective],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
technologieService=inject(TechnologieService)
technologies:Technologie[]=[]
constructor(){
this.technologies=this.technologieService.getTechnologies()
}
}
