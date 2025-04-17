import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {SpacesComponent} from './pages/spaces/spaces.component';
import {SecurityAndPermissionsComponent} from './pages/security-and-permissions/security-and-permissions.component';

export const routes: Routes = [

  { path:'', component:MainLayoutComponent,
    children:[
      { path :'settings', component:SettingsComponent },
      {path : 'spaces', component:SpacesComponent },
      {path:'security-and-permissions', component:SecurityAndPermissionsComponent },
    ]
  }

];
