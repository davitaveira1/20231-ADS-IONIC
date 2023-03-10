import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrincipalEx02Prop1Page } from './principal-ex02-prop1.page';

describe('PrincipalEx02Prop1Page', () => {
  let component: PrincipalEx02Prop1Page;
  let fixture: ComponentFixture<PrincipalEx02Prop1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalEx02Prop1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalEx02Prop1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
