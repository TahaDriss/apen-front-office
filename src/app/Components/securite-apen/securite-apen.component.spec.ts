import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriteApenComponent } from './securite-apen.component';

describe('SecuriteApenComponent', () => {
  let component: SecuriteApenComponent;
  let fixture: ComponentFixture<SecuriteApenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuriteApenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriteApenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
