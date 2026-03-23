import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';
import { MainStoryComponent } from './features/main-story/main-story.component';
import { ExperiencePageComponent } from './features/experience-page/experience-page.component';

export const routes: Routes = [
    {component:ExperiencePageComponent,path:'experience/:id'},
    {component:MainStoryComponent,path:'main'},
    {component:MenuComponent,path:'',pathMatch:'full'}
];
