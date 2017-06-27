import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {Email} from '../../models/email'

@Component({
  selector: 'page-contact-me',
  templateUrl: 'contact-me.html',
   styles: ['h1 { font-weight: normal; }']
})
export class ContactMePage {
    init: OnInit;
    //email: Email;
    contactFrmGrp: FormGroup;
  
  constructor(private frmBuilder: FormBuilder, public navCtrl: NavController) {
  }

    ngOnInit(): void {
        this.contactFrmGrp = this.frmBuilder.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            EmailId: ['', Validators.required],
            Message: [''],
            to: [''],
            from: [''],
            subject: [''],
        });
    }

    
    onSubmit(formData: any) {
        
    }

    reset() {
    this.contactFrmGrp.reset()
  }
}
