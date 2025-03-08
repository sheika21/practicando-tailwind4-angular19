import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tailwind4Component } from './tailwind4.component';

describe('Tailwind4Component', () => {
  let component: Tailwind4Component;
  let fixture: ComponentFixture<Tailwind4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tailwind4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tailwind4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
