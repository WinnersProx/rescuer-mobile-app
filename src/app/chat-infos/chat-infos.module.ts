import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1PageModule } from '../tab1/tab1.module';

//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageModule
    //RouterModule.forChild(routes)
  ],
  //declarations: [ChatInfosPage]
})
export class ChatInfosPageModule {}
