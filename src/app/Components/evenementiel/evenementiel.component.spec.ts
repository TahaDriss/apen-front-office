import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementielComponent } from './evenementiel.component';

describe('EvenementielComponent', () => {
  let component: EvenementielComponent;
  let fixture: ComponentFixture<EvenementielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
