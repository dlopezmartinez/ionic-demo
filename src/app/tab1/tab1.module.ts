import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PortalsegurosIframeComponent } from '../portalseguros-iframe/portalseguros-iframe.component';

@NgModule({
  declarations: [Tab1Page, PortalsegurosIframeComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
})
export class Tab1PageModule {}
