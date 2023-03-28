import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingProdcutComponent } from './best-selling-prodcut.component';

describe('BestSellingProdcutComponent', () => {
  let component: BestSellingProdcutComponent;
  let fixture: ComponentFixture<BestSellingProdcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellingProdcutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingProdcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
