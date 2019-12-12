import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckOutOrderPage } from './check-out-order.page';

describe('CheckOutOrderPage', () => {
  let component: CheckOutOrderPage;
  let fixture: ComponentFixture<CheckOutOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckOutOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
