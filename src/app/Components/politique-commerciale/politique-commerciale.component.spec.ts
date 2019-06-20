import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueCommercialeComponent } from './politique-commerciale.component';

describe('PolitiqueCommercialeComponent', () => {
  let component: PolitiqueCommercialeComponent;
  let fixture: ComponentFixture<PolitiqueCommercialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitiqueCommercialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiqueCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
