import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MingleClientTestsComponent } from './mingle-client-tests.component';

describe('MingleClientTestsComponent', () => {
  let component: MingleClientTestsComponent;
  let fixture: ComponentFixture<MingleClientTestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MingleClientTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MingleClientTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
