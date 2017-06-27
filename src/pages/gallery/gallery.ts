import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  carouselName:string = "Selfie";
  gallery : string = "Gallery";
  checkboxValue : string = "";
  toggle: string = "Toggle button";
  public toggleDivs: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  toggleCarousel()
  {
    this.toggleDivs = !this.toggleDivs;
    this.toggle = this.gallery = "";
    if(this.toggleDivs)
    {
      this.checkboxValue =  "Selfie";
    }
    else
    {
      this.checkboxValue =  "Nature";
    }
    
  }
  
}
