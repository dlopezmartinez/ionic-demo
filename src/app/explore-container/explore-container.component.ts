import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  constructor(private iab: InAppBrowser) {}

  ngOnInit(): void {
    this.doOpenBrowser(
      'https://www.cajamar.es/es/comun/acceder-a-portal-seguros/'
    );
  }

  async doOpenBrowser(url: string) {
    const browser = this.iab.create(url, '_blank', {
      location: 'no',
      fullscreen: 'yes',
      closebuttoncaption: 'Salir',
      hidenavigationbuttons: 'yes',
      toolbartranslucent: 'yes',
      toolbarposition: 'top',
    });
  }
}
