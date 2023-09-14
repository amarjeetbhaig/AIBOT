import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string, public content:string){}

}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "Hi":"Namsate",
    "hi":"hello",
    "hii":"hlo",
    "How are u" : "i am fine",
    "Who are you": "my name is APAi bot@",
    "What is React": " React is best framework ever",
    "Default": "I can't understand. Can you please repeat other wise Contact with Devil"

  }
  getBotAnswer(msg:any){
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage])
    },1500);
  }
  getBotMessage(question:string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['Default']


  }

} 
