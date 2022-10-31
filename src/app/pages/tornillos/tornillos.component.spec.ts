import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornillosComponent } from './tornillos.component';

describe('TornillosComponent', () => {
  let component: TornillosComponent;
  let fixture: ComponentFixture<TornillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornillosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TornillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
