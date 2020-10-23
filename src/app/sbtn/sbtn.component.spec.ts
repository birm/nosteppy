import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbtnComponent } from './sbtn.component';

describe('SbtnComponent', () => {
  let component: SbtnComponent;
  let fixture: ComponentFixture<SbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
