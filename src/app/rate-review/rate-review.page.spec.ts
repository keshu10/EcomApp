import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateReviewPage } from './rate-review.page';

describe('RateReviewPage', () => {
  let component: RateReviewPage;
  let fixture: ComponentFixture<RateReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
