import { Component, inject } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { FolderComponent } from '../shared/folder/folder.component';
import { RouterLink } from '@angular/router';
import { ExperiencesService } from '../../core/services/experiences.service';
import { SettingsService } from '../../core/services/settings.service';
import { Experience } from '../../core/models/experience.model';

@Component({
  selector: 'app-side-quests',
  imports: [NavComponent,FolderComponent,RouterLink],
  templateUrl: './side-quests.component.html',
  styleUrl: './side-quests.component.css'
})
export class SideQuestsComponent {
  experiences:Experience[]=[]
   ngOnInit(): void {
     this.settingsService.backgroundImage.set("url('/assets/images/bn.png')")
     this.experiences=this.experienceService.getSideQuests()
   }
   private settingsService=inject(SettingsService)
    experienceService=inject(ExperiencesService)
}
