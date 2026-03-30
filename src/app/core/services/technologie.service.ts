import { Injectable } from "@angular/core";
import { Technologie } from "../models/technologie.model";
@Injectable({providedIn:'root'})
export class TechnologieService{
getTechnologies() {
    return [
        new Technologie('HTML',       './assets/images/html.webp'),
        new Technologie('CSS',        './assets/images/css.webp'),
        new Technologie('JavaScript', './assets/images/js.webp'),
        new Technologie('TypeScript', './assets/images/ts.webp'),
        new Technologie('Spring',     './assets/images/spring.webp'),
        new Technologie('Angular',    './assets/images/angular.webp'),
        new Technologie('Tailwind',   './assets/images/tailwind.webp'),
        new Technologie('Python',     './assets/images/python.webp'),
        new Technologie('PostgreSQL', './assets/images/pg.webp'),
        new Technologie('Git',        './assets/images/git.webp'),
    ];
}
}