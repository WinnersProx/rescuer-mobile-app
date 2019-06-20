import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuidesPage } from './guides.page';
import { ChatInfosPage } from '../chat-infos/chat-infos.page';
import { ProfilePage } from '../profile/profile.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GuidesPage }])
  ],
  declarations: [GuidesPage, ChatInfosPage,ProfilePage],
  entryComponents : [ChatInfosPage,ProfilePage]

})
export class GuidesPageModule {}
