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
        path: 'view-guide/:guide',
        children: [
          {
            path: '',
            loadChildren: '../view-guide/view-guide.module#ViewGuidePageModule'
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
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: '../users/users.module#UsersPageModule'
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
