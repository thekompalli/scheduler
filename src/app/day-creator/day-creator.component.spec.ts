import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCreatorComponent } from './day-creator.component';

describe('DayCreatorComponent', () => {
  let component: DayCreatorComponent;
  let fixture: ComponentFixture<DayCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
