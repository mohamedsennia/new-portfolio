import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';
import { MainStoryComponent } from './features/main-story/main-story.component';
import { ExperiencePageComponent } from './features/experience-page/experience-page.component';
import { InventoryComponent } from './features/inventory/inventory.component';
import { SideQuestsComponent } from './features/side-quests/side-quests.component';

export const routes: Routes = [
    {component:SideQuestsComponent,path:'side'},
    {component:InventoryComponent,path:'inventory'},
    {component:ExperiencePageComponent,path:'quest/:id'},
    {component:MainStoryComponent,path:'main'},
    {component:MenuComponent,path:'',pathMatch:'full'}
];
