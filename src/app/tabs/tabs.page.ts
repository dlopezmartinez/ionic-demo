import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  doOpenWhatsapp(number: string) {
    document.location.href = `https://api.whatsapp.com/send?phone=${number}`;
  }
}
