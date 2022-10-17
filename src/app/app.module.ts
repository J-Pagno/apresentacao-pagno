import { CircleProgressModelComponent } from './components/circle-progress-model/circle-progress-model.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactButtonComponent } from './components/buttons/contact-button/contact-button.component';
import { ActionsButtonComponent } from './components/buttons/actions-button/actions-button.component';
import { InitialComponent } from './components/sections/initial/initial.component';
import { AboutComponent } from './components/sections/about/about.component';
import { StackComponent } from './components/sections/stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactButtonComponent,
    ActionsButtonComponent,
    InitialComponent,
    AboutComponent,
    StackComponent,
    CircleProgressModelComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 8,
      innerStrokeWidth: 4,
      animationDuration: 500,
      subtitleFontSize: '15',
      titleColor: '#e1e1e1',
      titleFontSize: '30',
      unitsColor: '#e1e1e1',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
