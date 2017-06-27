import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html',
})
export class ResumePage {
  checkboxValue : string = "Toogle Button";
  public toggleDivs: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumePage');
  }

  downloadResume()
  {
  }

  toggleDiv()
  {
    console.log(this.toggleDivs);
    
    this.toggleDivs = !this.toggleDivs;
    if(this.toggleDivs)
    {
      this.checkboxValue =  "Grid";
    }
    else
    {
      this.checkboxValue =  "Table";
    }
    console.log(this.toggleDivs);
  }
}
