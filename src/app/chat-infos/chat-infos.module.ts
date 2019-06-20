import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuidesPageModule } from '../guides/guides.module';

//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidesPageModule
    //RouterModule.forChild(routes)
  ],
  //declarations: [ChatInfosPage]
})
export class ChatInfosPageModule {}
