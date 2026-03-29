import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[typewriter]' })
export class TypewriterDirective implements OnInit {
  @Input() typewriter: string = '';
  @Input() speed: number = 30;

  constructor(private el: ElementRef) {}

  ngOnInit() {
  const full = this.typewriter; // raw HTML string
  let i = 0;
  this.el.nativeElement.innerHTML = '';

  const interval = setInterval(() => {
    // Slice more characters and set innerHTML each tick
    this.el.nativeElement.innerHTML = full.slice(0, i++);
    if (i > full.length) clearInterval(interval);
  }, this.speed);
}
}