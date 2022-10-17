import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProgressModelComponent } from './circle-progress-model.component';

describe('CircleProgressModelComponent', () => {
  let component: CircleProgressModelComponent;
  let fixture: ComponentFixture<CircleProgressModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleProgressModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleProgressModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
