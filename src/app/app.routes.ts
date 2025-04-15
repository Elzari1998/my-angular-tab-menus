import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {SettingsComponent} from './pages/settings/settings.component';

export const routes: Routes = [

  { path:'', component:MainLayoutComponent,
    children:[
      { path :'settings', component:SettingsComponent },
    ]
  }

];
