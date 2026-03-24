import { Component, inject, OnInit } from '@angular/core';
import { FolderComponent } from "../shared/folder/folder.component";
import { NavComponent } from "../shared/nav/nav.component";
import { ExperiencesService } from '../../core/services/experiences.service';
import { RouterLink } from "@angular/router";
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-main-story',
  imports: [FolderComponent, NavComponent, RouterLink],
  templateUrl: './main-story.component.html',
  styleUrl: './main-story.component.css'
})
export class MainStoryComponent implements OnInit{
   
  ngOnInit(): void {
    this.settingsService.backgroundImage.set("url('/assets/images/ruisseau.png')")
  }
  private settingsService=inject(SettingsService)
   experienceService=inject(ExperiencesService)
}
