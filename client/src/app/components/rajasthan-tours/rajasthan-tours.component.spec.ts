import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajasthanToursComponent } from './rajasthan-tours.component';

describe('RajasthanToursComponent', () => {
  let component: RajasthanToursComponent;
  let fixture: ComponentFixture<RajasthanToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajasthanToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajasthanToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
