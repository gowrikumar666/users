import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosysTaskComponent } from './infosys-task.component';

describe('InfosysTaskComponent', () => {
  let component: InfosysTaskComponent;
  let fixture: ComponentFixture<InfosysTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosysTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosysTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
