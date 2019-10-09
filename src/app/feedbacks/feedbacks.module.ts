import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedbacksPage } from './feedbacks.page';
import { UserProfilePage } from '../user-profile/user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbacksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedbacksPage,UserProfilePage],
  entryComponents : [UserProfilePage]
})
export class FeedbacksPageModule {}
