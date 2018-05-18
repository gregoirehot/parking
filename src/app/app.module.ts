import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ParkingComponent } from './dashboard/parking/parking.component';
import { FooterComponent } from './dashboard/footer/footer.component';

import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { VisiblePipe } from './_pipes/visible.pipe';
import { ParkingService } from './_services/parking.service';
import { MainPipe } from './_pipes/main.pipe';
import { TypewriterModule, TypewriterService } from 'ng2-typewriter';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    HeaderComponent,
    ParkingComponent,
    FooterComponent,
    VisiblePipe,
    MainPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TypewriterModule,
    ParallaxModule  
  ],
  providers: [ParkingService, TypewriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
