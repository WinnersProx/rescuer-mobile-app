import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl:string = 'http://localhost/smartchat_api/users/';
  constructor(private http : HttpClient, private Auth : AuthenticationService) { 
  }
  getUserFriends(){
    let friends = {
      "friends": [ 
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
              }
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
              }
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
              }
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
              }
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
              }
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
              }
          }
      ]
    };
    return friends;
    // return this.http.get(this.baseUrl + 'get_friends.json');
  }

}
