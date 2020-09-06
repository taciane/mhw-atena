import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ObjectivesComponent } from './dashboard/objectives/objectives.component';
import { RealityComponent } from './dashboard/reality/reality.component';
import { OptionsComponent } from './dashboard/options/options.component';
import { MainService } from './main.service';
import { WhatNextComponent } from './dashboard/what-next/what-next.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavigationComponent } from './navigation/navigation.component';

import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DialogStepCompleteComponent } from './dashboard/dialog-step-complete/dialog-step-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ObjectivesComponent,
    RealityComponent,
    OptionsComponent,
    WhatNextComponent,
    MyProfileComponent,
    NavigationComponent,
    LoginComponent,
    CarouselComponent,
    DialogStepCompleteComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatListModule,
    NgbModule,
    MatRadioModule,
    MatExpansionModule
  ],
  providers: [
    MainService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
