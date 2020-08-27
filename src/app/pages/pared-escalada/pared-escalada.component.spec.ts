import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParedEscaladaComponent } from './pared-escalada.component';

describe('ParedEscaladaComponent', () => {
  let component: ParedEscaladaComponent;
  let fixture: ComponentFixture<ParedEscaladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParedEscaladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParedEscaladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
