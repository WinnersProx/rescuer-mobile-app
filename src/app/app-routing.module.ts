import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  { 
    path: '', 
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'tabs', 
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate : [AuthGuardService]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'chat-infos', loadChildren: './chat-infos/chat-infos.module#ChatInfosPageModule' },
  { path: 'chat/:userId', loadChildren: './chat-infos/chat-infos.module#ChatInfosPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  
]; 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
