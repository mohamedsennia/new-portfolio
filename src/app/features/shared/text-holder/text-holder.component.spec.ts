import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHolderComponent } from './text-holder.component';

describe('TextHolderComponent', () => {
  let component: TextHolderComponent;
  let fixture: ComponentFixture<TextHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
