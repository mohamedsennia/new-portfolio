import { Component, inject } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [IconComponent,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
location=inject(Location)
goBack(){
  this.location.back()
}
}
