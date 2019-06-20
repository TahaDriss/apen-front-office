import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRHComponent } from './service-rh.component';

describe('ServiceRHComponent', () => {
  let component: ServiceRHComponent;
  let fixture: ComponentFixture<ServiceRHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
