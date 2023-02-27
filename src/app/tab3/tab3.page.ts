import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BiometryType, NativeBiometric } from 'capacitor-native-biometric';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  imageUrl: string = '';
  isFaceID: boolean = false;
  verified: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

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

  async doOpenCamera() {
    console.log('Opening camera');
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
    });

    console.log('image', image);

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imageUrl = this.getSanitizedUrl(image.webPath as string);

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }

  public getSanitizedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url) as string;
  }
}
