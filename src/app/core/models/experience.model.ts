import { Technologie } from "./technologie.model";

export class Experience{
    public get technologies(): Technologie[] {
        return this._technologies;
    }
    public set technologies(value: Technologie[]) {
        this._technologies = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get subtitle(): string {
        return this._subtitle;
    }
    public set subtitle(value: string) {
        this._subtitle = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    constructor(private _title: string,private _subtitle: string,private _image: string, private _description: string,private _technologies: Technologie[]){

    }
}