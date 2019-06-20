import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosRefComponent } from './nos-ref.component';

describe('NosRefComponent', () => {
  let component: NosRefComponent;
  let fixture: ComponentFixture<NosRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
