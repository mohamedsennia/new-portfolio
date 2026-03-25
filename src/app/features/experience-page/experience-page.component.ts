import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';
import { Experience } from '../../core/models/experience.model';
import { ExperiencesService } from '../../core/services/experiences.service';
import { SettingsService } from '../../core/services/settings.service';
import { TextHolderComponent } from "../shared/text-holder/text-holder.component";
import { CharacterComponent } from "../shared/character/character.component";

@Component({
  selector: 'app-experience-page',
  imports: [NavComponent, TextHolderComponent, CharacterComponent],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent implements  OnInit{
  activatedRoute=inject(ActivatedRoute)
  experienceService=inject(ExperiencesService)
  settingsService=inject(SettingsService)
   experience!:Experience

  ngOnInit(): void {
    let temp=this.experienceService.getQuestById(+this.activatedRoute.snapshot.params['id'])
    if(temp){
      this.experience=temp
    }else{
      //route to 404
    }
   
  this.settingsService.backgroundImage.set(`url(${this.experience.image})`)
  }

}
