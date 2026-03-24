import { Injectable, signal } from "@angular/core";

@Injectable({providedIn:'root'})
export class SettingsService{
    backgroundImage=signal("url('/assets/images/ruisseau.png')")
}