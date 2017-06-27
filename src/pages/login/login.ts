import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  implements OnInit {
  name: any;
  user: any;

@ViewChild('closeBtn') closeBtn: ElementRef;
    model: any = {};
    loading = false;
    returnUrl: string;
    userLoginText: string = " Login";
    loginClass: string = "glyphicon glyphicon-log-in";
    toggoleShowHide: number = 0;

    loginFrmGrp: FormGroup;
    msg: string;
    indLoading: boolean = false;
    constructor(private frmBldr: FormBuilder) { }

    ngOnInit(): void {

        this.loginFrmGrp = this.frmBldr.group({
            UserName: ['', Validators.required],
            UserPwd: ['', Validators.required]
        });
    }
    // private LoginClick() {
    //     if (this.userLoginText == " Login") {
    //         this.userLoginText = " Login";
    //         this.loginClass = "glyphicon glyphicon-log-out";
    //         this.toggoleShowHide = 0;
    //     }
    //     else if (this.userLoginText == " Logout") {
    //         this.userLoginText = " Login"
    //         this.loginClass = "glyphicon glyphicon-log-in";
    //         this.toggoleShowHide = 1;
    //     }
    // }

    resetControls() {
        this.loginFrmGrp.controls.reset;
        this.loginFrmGrp.reset();
    }

    onLogin(formData: any) {
        if (this.userLoginText == " Login") {
            this.loading = true;
            // this.authenticationService.login('api/userapi', formData).subscribe(
            //     data => {
            //         if (data != null) //Success  && data.Id != 0
            //         {
            //             this.msg = "Data successfully deleted.";
            //         }
            //         else {
            //             this.msg = "There is some issue in saving records, please contact to system administrator!"
            //         }
            //         this.userLoginText = " Logout"
            //         this.loginClass = "glyphicon glyphicon-log-out";
            //         this.closeModal();
            //         this.toggoleShowHide = 0
            //     },
            //     error => {
            //         this.msg = error;
            //     }
            // );
        }
        else if (this.userLoginText == " Logout") {
            this.userLoginText = " Login"
            this.loginClass = "glyphicon glyphicon-log-in";
            this.toggoleShowHide = 1;
        }

    }
}
