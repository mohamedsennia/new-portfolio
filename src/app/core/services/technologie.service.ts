import { Injectable } from "@angular/core";
import { Technologie } from "../models/technologie.model";
@Injectable({providedIn:'root'})
export class TechnologieService{
getTechnologies() {
    return [
        new Technologie('HTML',       './assets/images/html.png'),
        new Technologie('CSS',        './assets/images/css.png'),
        new Technologie('JavaScript', './assets/images/js.png'),
        new Technologie('TypeScript', './assets/images/ts.png'),
        new Technologie('Spring',     './assets/images/spring.png'),
        new Technologie('Angular',    './assets/images/angular.png'),
        new Technologie('Tailwind',   './assets/images/tailwind.png'),
        new Technologie('Python',     './assets/images/python.png'),
        new Technologie('PostgreSQL', './assets/images/pg.png'),
        new Technologie('Git',        './assets/images/git.png'),
    ];
}
}