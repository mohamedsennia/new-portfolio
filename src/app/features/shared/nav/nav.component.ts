import { Component } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [IconComponent,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
