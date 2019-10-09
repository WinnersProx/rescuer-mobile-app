import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertsPage } from './alerts.page';
import { ViewAlertPage } from '../view-alert/view-alert.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AlertsPage }])
  ],
  declarations: [AlertsPage, ViewAlertPage],
  entryComponents : [ViewAlertPage]
})
export class AlertsPageModule {}
