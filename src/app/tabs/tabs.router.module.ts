import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'guides',
        children: [
          {
            path: '',
            loadChildren: '../guides/guides.module#GuidesPageModule'
          }
        ]
      },
      {
        path: 'edit-profile',
        children: [
          {
            path: '',
            loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule'
          }
        ]
      },
      {
        path: 'view-profile',
        children: [
          {
            path: '',
            loadChildren: '../view-profile/view-profile.module#ViewProfilePageModule'
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: '../notifications/notifications.module#NotificationsPageModule'
          }
        ]
      },
      {
        path: 'feedbacks',
        children: [
          {
            path: '',
            loadChildren: '../feedbacks/feedbacks.module#FeedbacksPageModule'
          }
        ]
      },
      {
        path: 'alerts',
        children: [
          {
            path: '',
            loadChildren: '../alerts/alerts.module#AlertsPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/guides',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/guides',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
