import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/datas.service';
import { DetailsService } from '../services/details.service';
import { AuthenticationService } from '../services/authentication.service';
import { Users } from '../interfaces/users';
import { UsersService } from '../services/users.service';
import { UserProfilePage } from '../user-profile/user-profile.page';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.page.html',
  styleUrls: ['./feedbacks.page.scss'],
})
export class FeedbacksPage implements OnInit {

  @ViewChild('msgInput') msgInput;
	private pageTitle:string='Feedbacks';
  private ufeedbacks;
  constructor(private ___data: DataService, 
    private ___details : DetailsService, 
    private ___auth : AuthenticationService,
    private ___users : UsersService,
    private modalController : ModalController) { }

  ngOnInit() {
    
    this.___details.getFeedbacks().subscribe(res => {
      this.ufeedbacks = Object.values(res)[1];
    }, (error:Users) => {
      this.___data.toastError(error);
    });
  }
  ngDoCheck(){
  	this.___data.updateTitle(this.pageTitle);
  }

  sendFeedback({ message }){
    let input = document.querySelector('.message-input');
    this.___details.newFeedback(message).subscribe((res:Users) => {
      const { email, first_name, id } = this.___auth.getAuth;
      this.ufeedbacks.push({ first_name, message, user_id : id, created_on : new Date() });
      this.msgInput.el.value = '';
    }, (error:Users) => {
      this.___data.toastError(error);
    });

  }

  async viewUserProfile(user){
    this.___users.viewUProfile(user).subscribe(async (res) =>{
      const user = Object.values(res)[1];
      return await this.modalController.create({
        component : UserProfilePage,
        componentProps : { user },
        backdropDismiss : true,
        showBackdrop : true,
        cssClass  : 'new-profile-page',
        animated  : true,
        mode      : 'ios'
      }).then(modal => {
        modal.present()
      });
    }, error => {
      this.___data.toastError(error);
    })
  }

}
