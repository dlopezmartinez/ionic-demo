import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortalsegurosIframeComponent } from './portalseguros-iframe.component';

describe('PortalsegurosIframeComponent', () => {
  let component: PortalsegurosIframeComponent;
  let fixture: ComponentFixture<PortalsegurosIframeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalsegurosIframeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortalsegurosIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
