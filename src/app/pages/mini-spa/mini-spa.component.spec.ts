import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSpaComponent } from './mini-spa.component';

describe('MiniSpaComponent', () => {
  let component: MiniSpaComponent;
  let fixture: ComponentFixture<MiniSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
