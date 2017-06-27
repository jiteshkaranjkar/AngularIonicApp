import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { GithubUsers  } from '../providers/github-users/github-users';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { LoginPage } from '../pages/login/login';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { ContactMePage } from '../pages/contact-me/contact-me';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ResumePage } from '../pages/resume/resume';
import { GalleryPage } from '../pages/gallery/gallery';

import { UsersPageModule } from '../pages/users/users.module';  
import { PortfolioPageModule } from '../pages/portfolio/portfolio.module';
import { LoginPageModule } from '../pages/login/login.module';
import { UserDetailsPageModule } from '../pages/user-details/user-details.module';
import { ResumePageModule } from '../pages/resume/resume.module';
import { ContactMePageModule } from '../pages/contact-me/contact-me.module';
import { ItemDetailsPageModule } from '../pages/item-details/item-details.module';
import { GalleryPageModule } from '../pages/gallery/gallery.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [ MyApp, AboutPage, HomePage, TabsPage, HelloIonicPage, ListPage],
  imports: [ BrowserModule, HttpModule, IonicModule.forRoot(MyApp),  
             UsersPageModule, PortfolioPageModule, LoginPageModule, UserDetailsPageModule, ResumePageModule, ContactMePageModule, ItemDetailsPageModule, GalleryPageModule],
  bootstrap: [ IonicApp ],
  entryComponents: [ MyApp, HelloIonicPage, ItemDetailsPage, ListPage, AboutPage, HomePage, TabsPage, UsersPage, PortfolioPage, LoginPage, UserDetailsPage, ContactMePage, ResumePage, ItemDetailsPage, GalleryPage],
  providers: [ StatusBar, SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}, GithubUsers ]

})
export class AppModule {}
