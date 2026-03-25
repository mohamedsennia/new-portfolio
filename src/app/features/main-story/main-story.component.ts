import { Component, inject, OnInit } from '@angular/core';
import { FolderComponent } from "../shared/folder/folder.component";
import { NavComponent } from "../shared/nav/nav.component";
import { ExperiencesService } from '../../core/services/experiences.service';
import { RouterLink } from "@angular/router";
import { SettingsService } from '../../core/services/settings.service';
import { Experience } from '../../core/models/experience.model';

@Component({
  selector: 'app-main-story',
  imports: [FolderComponent, NavComponent, RouterLink],
  templateUrl: './main-story.component.html',
  styleUrl: './main-story.component.css'
})
export class MainStoryComponent implements OnInit{
   experiences:Experience[]=[]
  ngOnInit(): void {
    this.settingsService.backgroundImage.set("ruisseau.png")
    this.experiences=this.experienceService.getMainQuests()
  }
  private settingsService=inject(SettingsService)
   experienceService=inject(ExperiencesService)
}
