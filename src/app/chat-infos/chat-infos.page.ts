import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatsService } from '../services/chats.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-chat-infos',
  templateUrl: './chat-infos.page.html',
  styleUrls: ['./chat-infos.page.scss'],
})
export class ChatInfosPage implements OnInit {
  @ViewChild('mainContent') mainContent;
  @ViewChild('chatsContainer') chatsContainer;
  private chats:any = [];
  constructor(private Chats : ChatsService, private Aroute : ActivatedRoute, private modal : ModalController, private params : NavParams){
    // injections
  }
  ngOnInit() {
    console.log(this.getCurrentFriend);
    //this.friendId = parseInt(this.Aroute.snapshot.paramMap.get('userId'));//route params
    this.chats = Object.values(this.Chats.getFriendChats(this.getCurrentFriend.id))[0];
    // get chat details
  }
  ionViewDidEnter(){
    // document.querySelector('#mainContent').scrollToBottom(200);
  }
  get getCurrentFriend(){
    return this.params.get('chatInfos');
  }
  dismiss(){
    this.modal.dismiss().then(modal => {
      console.log("Modal dismissed");
    })
  }

  sendMessage(form){
      
      let container = document.querySelector('#mainContent');
      if(form.uchat != ""){

        this.chats.push({
          "m_id": 102,
          "m_sender": 2,
          "m_receiver": 5,
          "m_content": form.uchat,
          "created": "2019-04-19T17:12:12+00:00",
          "m_status": "1",
          "modified": "2019-04-19T17:12:12+00:00"
        });
        // setTimeout(container.scrollToBottom(300), 2000);
        form.uchat = "";
      }
      
     
  }

}
