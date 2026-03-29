// hover-sound.directive.ts
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ButtonSoundEffectDirective]'
})
export class ButtonSoundEffectDirective {
  @Input() appHoverSound: string = 'assets/sound effects/buttonSound.mp3';
  @Input() soundVolume: number = 1;

  private audio = new Audio();

  @HostListener('mouseenter')
  onMouseEnter() {  
    console.log('Playing sound:', this.appHoverSound);
    this.audio.src = this.appHoverSound;
    this.audio.volume = this.soundVolume;
    this.audio.currentTime = 0;
    this.audio.play().catch(err => console.warn('Audio blocked:', err));
  }
}