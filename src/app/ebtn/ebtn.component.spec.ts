import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbtnComponent } from './ebtn.component';

describe('EbtnComponent', () => {
  let component: EbtnComponent;
  let fixture: ComponentFixture<EbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
