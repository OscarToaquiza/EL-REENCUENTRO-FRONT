import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologicalRoutesComponent } from './ecological-routes.component';

describe('EcologicalRoutesComponent', () => {
  let component: EcologicalRoutesComponent;
  let fixture: ComponentFixture<EcologicalRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcologicalRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcologicalRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
