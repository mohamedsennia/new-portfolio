import { effect, Injectable, signal } from "@angular/core";

@Injectable({providedIn:'root'})
export class SettingsService{
    backgroundImage=signal("ruisseau.png")
    mode=signal('light')
    constructor(){
       let storageMode= localStorage.getItem('mode')
        if(storageMode){
            this.mode.set(storageMode)
        }else{

        }
        effect(()=>{
       
            localStorage.setItem('mode',this.mode())
        })
    }
    toggleMode(){
        if(this.mode()=='dark'){
            this.mode.set('light')
        }else{
            this.mode.set('dark')
        }
    }
}