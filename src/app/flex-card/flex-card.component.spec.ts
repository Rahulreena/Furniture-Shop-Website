import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCardComponent } from './flex-card.component';

describe('FlexCardComponent', () => {
  let component: FlexCardComponent;
  let fixture: ComponentFixture<FlexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
