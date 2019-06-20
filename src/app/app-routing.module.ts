import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './Components/accueil/accueil.component';
import {PresentationComponent} from './Components/presentation/presentation.component';
import {ImplantationComponent} from './Components/implantation/implantation.component';
import {PolitiqueCommercialeComponent} from './Components/politique-commerciale/politique-commerciale.component';
import {ServiceRHComponent} from './Components/service-rh/service-rh.component';
import {ServicePlanningComponent} from './Components/service-planning/service-planning.component';
import {SecuriteApenComponent} from './Components/securite-apen/securite-apen.component';
import {NosServicesComponent} from './Components/nos-services/nos-services.component';
import {NosActivitesComponent} from './Components/nos-activites/nos-activites.component';
import {NosRefComponent} from './Components/nos-ref/nos-ref.component';
import {ContacterNousComponent} from './Components/contacter-nous/contacter-nous.component';
import {EvenementielComponent} from './Components/evenementiel/evenementiel.component';
import {SurveillanceComponent} from './Components/surveillance/surveillance.component';
import {DistributionComponent} from './Components/distribution/distribution.component';
import {IncendieComponent} from './Components/incendie/incendie.component';

const routes: Routes = [
  { path : '', component : AccueilComponent },
  { path : 'presentation', component : PresentationComponent },
  { path : 'implantation', component : ImplantationComponent },
  { path : 'politiquecommerciale', component : PolitiqueCommercialeComponent },
  { path : 'resourcehumaine', component : ServiceRHComponent },
  { path : 'serviceplanning', component : ServicePlanningComponent },
  { path : 'securiteapen', component : SecuriteApenComponent },
  { path : 'service', component : NosServicesComponent },
  { path : 'activites', component : NosActivitesComponent },
  { path : 'references', component : NosRefComponent },
  { path : 'contactez', component : ContacterNousComponent },
  { path : 'evenementiel', component : EvenementielComponent },
  { path : 'surveillance', component : SurveillanceComponent },
  { path : 'distribution', component : DistributionComponent },
  { path : 'incendie', component : IncendieComponent },

  { path : '**', component : AccueilComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
