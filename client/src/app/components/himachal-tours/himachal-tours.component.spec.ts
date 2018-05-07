import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HimachalToursComponent } from './himachal-tours.component';

describe('HimachalToursComponent', () => {
  let component: HimachalToursComponent;
  let fixture: ComponentFixture<HimachalToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HimachalToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HimachalToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
