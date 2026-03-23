import { Component, inject } from '@angular/core';
import { FolderComponent } from "../shared/folder/folder.component";
import { NavComponent } from "../shared/nav/nav.component";
import { ExperiencesService } from '../../core/services/experiences.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-story',
  imports: [FolderComponent, NavComponent, RouterLink],
  templateUrl: './main-story.component.html',
  styleUrl: './main-story.component.css'
})
export class MainStoryComponent {
  experienceService=inject(ExperiencesService)
}
