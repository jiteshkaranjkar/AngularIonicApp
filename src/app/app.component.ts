import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { ContactMePage } from '../pages/contact-me/contact-me';
import { ResumePage } from '../pages/resume/resume';
import { GalleryPage } from '../pages/gallery/gallery';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;//TabsPage;
  icons: string[];
  pages: Array<{title: string, icon: string; component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
        // { title: 'Hello Ionic', icon : 'flask', component: HelloIonicPage },
        // { title: 'My First List', icon : 'flask', component: ListPage },
        {title:'Home', icon : 'home', component: HomePage},
        {title:'About', icon : 'person',component: AboutPage},
        {title:'Users', icon : 'people', component: UsersPage},
        {title:'Portfolio', icon : 'body', component:PortfolioPage},
        {title:'Login', icon : 'create', component:LoginPage},
        {title:'Contact', icon : 'contact', component:ContactMePage},     
        {title:'Resume', icon : 'construct', component:ResumePage}, 
        {title:'Gallery', icon : 'photos', component:GalleryPage}         
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
