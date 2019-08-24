import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { 
    path: '', 
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'tabs', 
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'chat-infos', loadChildren: './chat-infos/chat-infos.module#ChatInfosPageModule' },
  { path: 'chat/:userId', loadChildren: './chat-infos/chat-infos.module#ChatInfosPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'new-alert', loadChildren: './new-alert/new-alert.module#NewAlertPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'feedbacks', loadChildren: './feedbacks/feedbacks.module#FeedbacksPageModule' },
  { path: 'view-profile', loadChildren: './view-profile/view-profile.module#ViewProfilePageModule' },
  { path: 'view-guide/:guide', loadChildren: './view-guide/view-guide.module#ViewGuidePageModule' },
  { path: 'view-alert', loadChildren: './view-alert/view-alert.module#ViewAlertPageModule' },

  
]; 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
