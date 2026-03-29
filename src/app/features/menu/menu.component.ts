import { Component, inject, OnInit } from '@angular/core';
import { CharacterComponent } from "../shared/character/character.component";
import { ButtonComponent } from "../shared/button/button.component";
import { NameComponent } from "../shared/name/name.component";
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/settings.service';
import { ButtonSoundEffectDirective } from '../../core/directives/buttonSoundeEffect.directive';

@Component({
  selector: 'app-menu',
  imports: [CharacterComponent, ButtonComponent, NameComponent,RouterLink,ButtonSoundEffectDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   settingsService=inject(SettingsService)
  constructor(){
    this.settingsService.backgroundImage.set("ruisseau.png")
  }
}
