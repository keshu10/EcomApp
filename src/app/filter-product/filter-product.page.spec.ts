import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterProductPage } from './filter-product.page';

describe('FilterProductPage', () => {
  let component: FilterProductPage;
  let fixture: ComponentFixture<FilterProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
