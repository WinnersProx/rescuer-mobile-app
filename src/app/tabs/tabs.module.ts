import { IonicModule} from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
// import { SuperTabsModule } from 'ionic2-super-tabs';
// import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
    // SuperTabsModule.forRoot()
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
