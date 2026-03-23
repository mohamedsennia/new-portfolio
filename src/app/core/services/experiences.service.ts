import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";

@Injectable({providedIn:'root'})
export class ExperiencesService{
    experiences:Experience[]=[
        new Experience("Bachelor's degree","Software and Information Systems Engineering",'./assets/images/usthb.png',""),
        new Experience("Master's degree","Visual computing",'./assets/images/usthb.png',""),
        new Experience("Assistant engineer level 2","Algerian supreme court",'./assets/images/cs.png',""),
        new Experience("Full stack developper","Yaldinine",'./assets/images/yalidine.png',"")
    ]
}