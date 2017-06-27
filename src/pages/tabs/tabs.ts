import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { UsersPage } from '../users/users';
import { LoginPage } from '../login/login';
import { PortfolioPage } from '../portfolio/portfolio';
import { ContactMePage } from '../contact-me/contact-me';
import { ResumePage } from '../resume/resume';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = UsersPage;
  tab4Root = PortfolioPage;
  tab5Root = LoginPage;
  tab6Root = ContactMePage;
  tab7Root = ResumePage;

  constructor() {

  }
}
