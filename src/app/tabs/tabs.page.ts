import { Component, OnInit } from '@angular/core';
import { BiometryType, NativeBiometric } from 'capacitor-native-biometric';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor() {}

  isFaceID: boolean = false;
  verified: boolean = false;

  ngOnInit(): void {
    this.doNativeAuth();
  }

  async doNativeAuth() {
    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable) return;

    this.isFaceID = result.biometryType == BiometryType.FACE_ID;

    const verified = await NativeBiometric.verifyIdentity({
      reason: 'For easy log in',
      title: 'Log in',
      subtitle: 'Maybe add subtitle here?',
      description: 'Maybe a description too?',
    })
      .then(() => true)
      .catch(() => false);

    if (!verified) return;

    this.verified = true;
  }

  doOpenWhatsapp(number: string) {
    document.location.href = `https://api.whatsapp.com/send?phone=${number}`;
  }
}
