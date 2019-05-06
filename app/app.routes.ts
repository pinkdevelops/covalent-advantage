import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { MonitoringComponent } from './monitoring/monitoring.component';

const routes: Routes = [
    {
      path: '', component: MainComponent, children: [
          { path: '', component: HomepageComponent },
          // { path: 'monitoring', component: MonitoringComponent },
      ],
    },
    { path: '**', redirectTo: '/' },
];

export const appRoutes: any = RouterModule.forRoot(routes);
