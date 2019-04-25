import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ChatsService {
  
  private base_url = 'http://localhost/api/';
  constructor(
    private Auth : AuthenticationService,
    private http : HttpClient
    ) { }
  getAllChats(){
    // get all the chats of the current user
    // return this.http.get(`${this.base_url}get_chats.php`)
    let allChats = {
      "chats": [
          {
              "id": 1,
              "sender_id": 3,
              "receiver_id": 2,
              "status": "1",
              "created": "2018-03-09T00:44:41+00:00",
              "modified": "2018-03-09T00:44:41+00:00",
              "user": {
                  "id": 3,
                  "email": "kevinmb@gmail.com",
                  "created": "2018-01-24T23:24:26+00:00",
                  "modified": "2018-05-10T07:02:47+00:00",
                  "about": "I\u0027m who i am",
                  "phone": "+243556235666",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Kevin",
                  "slug": "Kevin",
                  "user_dob": "1994-05-10T00:00:00+00:00",
                  "user_sex": ""
              },
              "message": {
                  "m_id": 96,
                  "m_sender": 2,
                  "m_receiver": 3,
                  "m_content": "Enjoy!!",
                  "created": "2019-04-19T01:54:02+00:00",
                  "m_status": "0",
                  "modified": "2019-04-19T01:54:02+00:00"
              }
          },
          {
              "id": 5,
              "sender_id": 2,
              "receiver_id": 5,
              "status": "1",
              "created": "2018-03-09T05:34:45+00:00",
              "modified": "2018-03-09T05:34:45+00:00",
              "user": {
                  "id": 5,
                  "email": "christiano@gmail.com",
                  "created": "2018-03-06T11:49:31+00:00",
                  "modified": "2018-03-06T11:49:31+00:00",
                  "about": "That is all!",
                  "phone": "+243975359832",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Christiano",
                  "slug": "Christiano",
                  "user_dob": "1997-05-08T00:00:00+00:00",
                  "user_sex": ""
              },
              "message": {
                  "m_id": 101,
                  "m_sender": 5,
                  "m_receiver": 2,
                  "m_content": "Same as you Winner",
                  "created": "2019-04-19T17:12:12+00:00",
                  "m_status": "1",
                  "modified": "2019-04-19T17:12:12+00:00"
              }
          },
          {
              "id": 6,
              "sender_id": 6,
              "receiver_id": 2,
              "status": "1",
              "created": "2018-03-13T00:18:02+00:00",
              "modified": "2018-03-13T00:18:02+00:00",
              "user": {
                  "id": 6,
                  "email": "murhonyiarsene45@gmail.com",
                  "created": "2018-03-07T09:55:57+00:00",
                  "modified": "2018-03-13T00:17:47+00:00",
                  "about": "nothing special!",
                  "phone": "+243991264608",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "arsene",
                  "slug": "arsene",
                  "user_dob": null,
                  "user_sex": ""
              },
              "message": {
                  "m_id": 60,
                  "m_sender": 2,
                  "m_receiver": 6,
                  "m_content": "Hey",
                  "created": "2018-06-13T21:48:00+00:00",
                  "m_status": "0",
                  "modified": null
              }
          },
          {
              "id": 9,
              "sender_id": 7,
              "receiver_id": 2,
              "status": "1",
              "created": "2018-03-13T03:24:58+00:00",
              "modified": "2018-03-13T03:24:58+00:00",
              "user": {
                  "id": 7,
                  "email": "winners1@gmail.com",
                  "created": "2018-03-13T03:22:54+00:00",
                  "modified": "2018-04-23T02:06:47+00:00",
                  "about": "I am back now",
                  "phone": "+243653298375",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "winners4",
                  "slug": "winners4",
                  "user_dob": "2023-01-07T00:00:00+00:00",
                  "user_sex": ""
              },
              "message": {
                  "m_id": 66,
                  "m_sender": 2,
                  "m_receiver": 7,
                  "m_content": "Hey",
                  "created": "2018-06-29T02:23:12+00:00",
                  "m_status": "0",
                  "modified": null
              }
          },
          {
              "id": 13,
              "sender_id": 2,
              "receiver_id": 4,
              "status": "1",
              "created": "2018-03-13T03:25:58+00:00",
              "modified": "2018-03-13T03:25:58+00:00",
              "user": {
                  "id": 4,
                  "email": "cleverjay@gmail.com",
                  "created": "2018-01-25T03:08:49+00:00",
                  "modified": "2018-01-25T03:08:49+00:00",
                  "about": "This is about me!",
                  "phone": "+243556235665",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "CleverBB",
                  "slug": "CleverBB",
                  "user_dob": null,
                  "user_sex": ""
              },
              "message": {
                  "m_id": 77,
                  "m_sender": 2,
                  "m_receiver": 4,
                  "m_content": "hey",
                  "created": "2018-09-07T07:10:23+00:00",
                  "m_status": "0",
                  "modified": null
              }
          },
          {
              "id": 15,
              "sender_id": 8,
              "receiver_id": 2,
              "status": "1",
              "created": "2018-03-13T03:28:38+00:00",
              "modified": "2018-03-13T03:28:38+00:00",
              "user": {
                  "id": 8,
                  "email": "superstar@gmail.com",
                  "created": "2018-03-13T03:28:23+00:00",
                  "modified": "2018-03-13T03:28:23+00:00",
                  "about": "This is all about me!",
                  "phone": "+243568923569",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Super1",
                  "slug": "Super1",
                  "user_dob": null,
                  "user_sex": ""
              },
              "message": null
          },
          {
              "id": 18,
              "sender_id": 10,
              "receiver_id": 2,
              "status": "1",
              "created": "2018-06-24T06:51:08+00:00",
              "modified": "2018-06-24T06:51:08+00:00",
              "user": {
                  "id": 10,
                  "email": "Emanuella@gmail.com",
                  "created": "2018-06-24T06:49:57+00:00",
                  "modified": "2018-06-27T05:00:35+00:00",
                  "about": "Fine Always!!!",
                  "phone": "+24352142536",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Emanuella",
                  "slug": "Emanuella",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": {
                  "m_id": 89,
                  "m_sender": 2,
                  "m_receiver": 10,
                  "m_content": "Common",
                  "created": "2019-04-19T00:51:52+00:00",
                  "m_status": "0",
                  "modified": "2019-04-19T00:51:52+00:00"
              }
          },
          {
              "id": 19,
              "sender_id": 2,
              "receiver_id": 9,
              "status": "1",
              "created": "2018-06-27T04:35:30+00:00",
              "modified": "2018-06-27T04:35:30+00:00",
              "user": {
                  "id": 9,
                  "email": "calvin@gmail.com",
                  "created": "2018-06-11T17:46:25+00:00",
                  "modified": "2018-10-10T20:09:54+00:00",
                  "about": "Nothing about!!",
                  "phone": "+24352312478",
                  "avatar": "avatars\/9\/2b0c9672f60234d81fe3db2e6940fb72.jpg",
                  "name": "Calvin",
                  "slug": "Calvin",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": {
                  "m_id": 97,
                  "m_sender": 2,
                  "m_receiver": 9,
                  "m_content": "Good",
                  "created": "2019-04-19T02:13:49+00:00",
                  "m_status": "0",
                  "modified": "2019-04-19T02:13:49+00:00"
              }
          },
          {
              "id": 23,
              "sender_id": 2,
              "receiver_id": 12,
              "status": "1",
              "created": "2018-08-22T06:01:28+00:00",
              "modified": "2018-08-22T06:01:28+00:00",
              "user": {
                  "id": 12,
                  "email": "alicia75@gmail.com",
                  "created": "2018-07-16T13:58:24+00:00",
                  "modified": "2018-07-16T13:58:24+00:00",
                  "about": "",
                  "phone": "+243975359124",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Alicia75",
                  "slug": "Alicia75",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": null
          },
          {
              "id": 24,
              "sender_id": 2,
              "receiver_id": 11,
              "status": "1",
              "created": "2018-08-22T06:01:34+00:00",
              "modified": "2018-08-22T06:01:34+00:00",
              "user": {
                  "id": 11,
                  "email": "george@gmail.com",
                  "created": "2018-07-09T20:45:45+00:00",
                  "modified": "2018-09-19T14:46:32+00:00",
                  "about": "Quim pis para benum",
                  "phone": "+243730412352",
                  "avatar": "avatars\/11\/bb5bd6a39c02f1e4860906893b1a89e1.png",
                  "name": "Georges",
                  "slug": "Georges",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": {
                  "m_id": 99,
                  "m_sender": 2,
                  "m_receiver": 11,
                  "m_content": "Best",
                  "created": "2019-04-19T11:26:36+00:00",
                  "m_status": "0",
                  "modified": "2019-04-19T11:26:36+00:00"
              }
          },
          {
              "id": 25,
              "sender_id": 2,
              "receiver_id": 13,
              "status": "1",
              "created": "2018-08-22T08:13:47+00:00",
              "modified": "2018-08-22T08:13:47+00:00",
              "user": {
                  "id": 13,
                  "email": "aline15@gmail.com",
                  "created": "2018-08-22T08:10:03+00:00",
                  "modified": "2018-08-22T08:10:03+00:00",
                  "about": "",
                  "phone": "+243979895125",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Aline15",
                  "slug": "Aline15",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": null
          },
          {
              "id": 26,
              "sender_id": 2,
              "receiver_id": 14,
              "status": "1",
              "created": "2018-08-22T08:13:51+00:00",
              "modified": "2018-08-22T08:13:51+00:00",
              "user": {
                  "id": 14,
                  "email": "judith4@gmail.com",
                  "created": "2018-08-22T08:11:21+00:00",
                  "modified": "2018-08-22T08:11:21+00:00",
                  "about": "",
                  "phone": "+243725835124",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Judith",
                  "slug": "Judith",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": null
          },
          {
              "id": 27,
              "sender_id": 2,
              "receiver_id": 16,
              "status": "1",
              "created": "2018-08-22T08:13:53+00:00",
              "modified": "2018-08-22T08:13:53+00:00",
              "user": {
                  "id": 16,
                  "email": "victoire@gmail.com",
                  "created": "2018-08-22T08:13:18+00:00",
                  "modified": "2018-10-10T20:04:43+00:00",
                  "about": "This is me now",
                  "phone": "+2439798126",
                  "avatar": "avatars\/16\/ea99782bebb208e80e9551c99b413a0f.jpg",
                  "name": "Victoire",
                  "slug": "Victoire",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": {
                  "m_id": 100,
                  "m_sender": 2,
                  "m_receiver": 16,
                  "m_content": "Hey",
                  "created": "2019-04-19T15:59:50+00:00",
                  "m_status": "0",
                  "modified": "2019-04-19T15:59:50+00:00"
              }
          },
          {
              "id": 28,
              "sender_id": 2,
              "receiver_id": 15,
              "status": "1",
              "created": "2018-08-22T08:14:00+00:00",
              "modified": "2018-08-22T08:14:00+00:00",
              "user": {
                  "id": 15,
                  "email": "vincent@gmail.com",
                  "created": "2018-08-22T08:12:21+00:00",
                  "modified": "2018-08-22T08:12:21+00:00",
                  "about": "",
                  "phone": "+2507245123",
                  "avatar": "avatars\/11\/4ef7410454ee9ad72750ae1db926b974.jpg",
                  "name": "Vincent",
                  "slug": "Vincent",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": null
          },
          {
              "id": 29,
              "sender_id": 18,
              "receiver_id": 2,
              "status": "1",
              "created": "2018-09-19T15:05:23+00:00",
              "modified": "2018-09-19T15:05:23+00:00",
              "user": {
                  "id": 18,
                  "email": "shadrackm@gmail.com",
                  "created": "2018-09-19T14:58:27+00:00",
                  "modified": "2018-09-19T15:00:47+00:00",
                  "about": "je suis tel que vous me voyez",
                  "phone": "+243975859123",
                  "avatar": "avatars\/18\/f9d8c8ce8b69754bf59e6ee0c5480016.jpg",
                  "name": "Shadrack",
                  "slug": "Shadrack",
                  "user_dob": null,
                  "user_sex": "M"
              },
              "message": {
                  "m_id": 81,
                  "m_sender": 2,
                  "m_receiver": 18,
                  "m_content": "How is it bro??",
                  "created": "2018-10-06T01:18:59+00:00",
                  "m_status": "2",
                  "modified": null
              }
          }
      ]
    };
    return allChats;
  }
  getFriendChats(friendId){
    let firstFriend = {
        "chats": [
            {
                "m_id": 1,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Hey guy",
                "created": "2018-04-01T15:27:00+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 2,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "How is it?",
                "created": "2018-04-01T15:27:24+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 3,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "Fine What about you?",
                "created": "2018-04-01T15:28:46+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 4,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Everything is under control, how are days",
                "created": "2018-04-01T15:52:52+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 5,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": ".?",
                "created": "2018-04-01T15:53:05+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 6,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Why don\u0027t you answer me!",
                "created": "2018-04-01T20:11:47+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 7,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "Oh my friend i was very busy!!",
                "created": "2018-04-03T07:56:06+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 8,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "I am so sorry!",
                "created": "2018-04-03T07:56:19+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 9,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "What where you doing?",
                "created": "2018-04-03T07:56:51+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 10,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "All of these time i guess you were making money!",
                "created": "2018-04-03T07:57:20+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 11,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "No but a bit because it were a training that i was doing!",
                "created": "2018-04-03T07:58:27+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 12,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "which kind of training(about what?)",
                "created": "2018-04-03T07:59:16+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 13,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "About business you know we have to invest",
                "created": "2018-04-03T08:00:07+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 14,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "as we are still younger!",
                "created": "2018-04-03T08:00:43+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 15,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Okay good training and take care",
                "created": "2018-04-03T08:02:20+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 16,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "!!!",
                "created": "2018-04-03T08:02:28+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 17,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "Okay thanks!",
                "created": "2018-04-03T08:02:45+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 18,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Okay thanks",
                "created": "2018-04-03T08:03:15+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 19,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "a beg of you!",
                "created": "2018-04-03T08:03:27+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 20,
                "m_sender": 3,
                "m_receiver": 2,
                "m_content": "Okay!!!",
                "created": "2018-04-03T08:03:56+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 21,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "How are you kevin!",
                "created": "2018-04-26T02:04:29+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 33,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Hey winner",
                "created": "2018-05-03T16:27:42+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 83,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "what\u0027s your problem?",
                "created": "2018-10-13T14:02:58+00:00",
                "m_status": "0",
                "modified": null
            },
            {
                "m_id": 84,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Hey",
                "created": "2018-11-18T17:34:14+00:00",
                "m_status": "0",
                "modified": null
            },
            {
                "m_id": 96,
                "m_sender": 2,
                "m_receiver": 3,
                "m_content": "Enjoy!!",
                "created": "2019-04-19T01:54:02+00:00",
                "m_status": "0",
                "modified": "2019-04-19T01:54:02+00:00"
            }
        ]
    };
    let alternativeFriend = {
        "chats": [
            {
                "m_id": 22,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Hey how is it?",
                "created": "2018-05-02T04:34:11+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 23,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "Fine thanks, what about you sir?",
                "created": "2018-05-02T04:34:46+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 24,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Oh Good!!",
                "created": "2018-05-02T04:39:59+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 25,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "Salut",
                "created": "2018-05-02T06:00:25+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 26,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "repond monsieur",
                "created": "2018-05-02T06:09:39+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 27,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Oh sorry i was very busy",
                "created": "2018-05-02T06:11:24+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 28,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "okay you become me",
                "created": "2018-05-02T06:14:21+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 29,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "ok!",
                "created": "2018-05-02T06:15:49+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 30,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "why okay i guess because i did not answer but i didn\u0027t wish it",
                "created": "2018-05-02T06:18:50+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 34,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Hey winner?",
                "created": "2018-06-09T16:49:04+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 35,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "How is it friend?",
                "created": "2018-06-09T17:04:44+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 36,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Good what about you?",
                "created": "2018-06-09T17:06:17+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 37,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Fine too my friend!",
                "created": "2018-06-09T17:09:08+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 38,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Okay have a nice day!!",
                "created": "2018-06-09T17:10:00+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 39,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "Okay same to you",
                "created": "2018-06-09T17:10:54+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 40,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "to you friend",
                "created": "2018-06-09T17:11:12+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 41,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "Greet them",
                "created": "2018-06-09T17:11:24+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 42,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Okay do the same",
                "created": "2018-06-09T17:18:27+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 43,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "Indeed",
                "created": "2018-06-09T17:22:40+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 44,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "hey",
                "created": "2018-06-10T04:43:41+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 45,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "How are you?",
                "created": "2018-06-10T04:44:31+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 46,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Okay",
                "created": "2018-06-10T04:46:54+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 47,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Answer please!",
                "created": "2018-06-10T04:47:40+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 48,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "Yes I\u0027m sorry how is it?",
                "created": "2018-06-10T04:48:58+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 49,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "are you okay?",
                "created": "2018-06-10T04:49:19+00:00",
                "m_status": "2",
                "modified": null
            },
            {
                "m_id": 53,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "hey",
                "created": "2018-06-11T19:07:19+00:00",
                "m_status": "1",
                "modified": null
            },
            {
                "m_id": 54,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "hey",
                "created": "2018-06-11T19:07:37+00:00",
                "m_status": "1",
                "modified": null
            },
            {
                "m_id": 55,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Hey",
                "created": "2018-06-11T20:06:46+00:00",
                "m_status": "1",
                "modified": null
            },
            {
                "m_id": 56,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Good",
                "created": "2018-06-11T20:07:09+00:00",
                "m_status": "1",
                "modified": null
            },
            {
                "m_id": 70,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Morning",
                "created": "2018-07-04T03:17:36+00:00",
                "m_status": "1",
                "modified": null
            },
            {
                "m_id": 94,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "Why don\u0027t you answer?",
                "created": "2019-04-19T01:32:57+00:00",
                "m_status": "0",
                "modified": "2019-04-19T01:32:57+00:00"
            },
            {
                "m_id": 98,
                "m_sender": 2,
                "m_receiver": 5,
                "m_content": "hahaha you\u0027re blessed enough",
                "created": "2019-04-19T02:18:59+00:00",
                "m_status": "0",
                "modified": "2019-04-19T02:18:59+00:00"
            },
            {
                "m_id": 101,
                "m_sender": 5,
                "m_receiver": 2,
                "m_content": "Same as you Winner",
                "created": "2019-04-19T17:12:12+00:00",
                "m_status": "1",
                "modified": "2019-04-19T17:12:12+00:00"
            }
        ]
    };
    return (friendId === 3) ? firstFriend : alternativeFriend;
    // get all the chat with a specific user
    // return this.http.get(`${this.base_url}friend${friendId}.php`)
  }
  newChat(chat, user){
      this.getFriendChats(5).chats.values()[0].push({
        "m_id": 102,
        "m_sender": 2,
        "m_receiver": 5,
        "m_content": chat,
        "created": "2019-04-19T17:12:12+00:00",
        "m_status": "1",
        "modified": "2019-04-19T17:12:12+00:00"
      });
    // return this.http.post(`${this.base_url}new_chat/${user}.php`, { chat : chat })
  }
}
