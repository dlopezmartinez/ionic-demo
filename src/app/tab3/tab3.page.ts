import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  imageUrl: string = '';

  constructor(private sanitizer: DomSanitizer) {}

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
