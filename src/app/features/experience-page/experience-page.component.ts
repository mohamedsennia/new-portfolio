import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';
import { Experience } from '../../core/models/experience.model';
import { ExperiencesService } from '../../core/services/experiences.service';

@Component({
  selector: 'app-experience-page',
  imports: [NavComponent],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent implements  OnInit{
  activatedRoute=inject(ActivatedRoute)
  experienceService=inject(ExperiencesService)
   experience!:Experience
  ngOnInit(): void {
   this.experience=this.experienceService.experiences[+this.activatedRoute.snapshot.params['id']]
  }

}
