import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFishingComponent } from './sport-fishing.component';

describe('SportFishingComponent', () => {
  let component: SportFishingComponent;
  let fixture: ComponentFixture<SportFishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportFishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportFishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
