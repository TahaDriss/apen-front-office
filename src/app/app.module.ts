import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { PresentationComponent } from './Components/presentation/presentation.component';
import { ImplantationComponent } from './Components/implantation/implantation.component';
import { PolitiqueCommercialeComponent } from './Components/politique-commerciale/politique-commerciale.component';
import { ServiceRHComponent } from './Components/service-rh/service-rh.component';
import { ServicePlanningComponent } from './Components/service-planning/service-planning.component';
import { SecuriteApenComponent } from './Components/securite-apen/securite-apen.component';
import { NosServicesComponent } from './Components/nos-services/nos-services.component';
import { NosActivitesComponent } from './Components/nos-activites/nos-activites.component';
import { NosRefComponent } from './Components/nos-ref/nos-ref.component';
import { ContacterNousComponent } from './Components/contacter-nous/contacter-nous.component';
import { DonneesPersoComponent } from './Components/donnees-perso/donnees-perso.component';
import { RecrutementComponent } from './Components/recrutement/recrutement.component';
import {HttpClientModule} from '@angular/common/http';
import { EvenementielComponent } from './Components/evenementiel/evenementiel.component';
import { SurveillanceComponent } from './Components/surveillance/surveillance.component';
import { DistributionComponent } from './Components/distribution/distribution.component';
import { IncendieComponent } from './Components/incendie/incendie.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PresentationComponent,
    ImplantationComponent,
    PolitiqueCommercialeComponent,
    ServiceRHComponent,
    ServicePlanningComponent,
    SecuriteApenComponent,
    NosServicesComponent,
    NosActivitesComponent,
    NosRefComponent,
    ContacterNousComponent,
    DonneesPersoComponent,
    RecrutementComponent,
    EvenementielComponent,
    SurveillanceComponent,
    DistributionComponent,
    IncendieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
