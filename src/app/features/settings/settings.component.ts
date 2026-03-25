import { Component, inject } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-settings',
  imports: [NavComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
 settingsService=inject(SettingsService)

  get isDark(){
    return this.settingsService.mode()=='dark'
  }
  toggleMode(){
    this.settingsService.toggleMode()
  }
}
