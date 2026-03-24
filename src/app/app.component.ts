import { Component, HostBinding, inject, OnInit,effect  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterComponent } from "./features/shared/character/character.component";
import { MenuComponent } from "./features/menu/menu.component";
import { SettingsService } from './core/services/settings.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
 
  title = 'portfolio';
  
       settingsService=inject(SettingsService)
          @HostBinding('style.--backgroundImage') 
          get backgroundImage() {
              return this.settingsService.backgroundImage();
            }
  
}
