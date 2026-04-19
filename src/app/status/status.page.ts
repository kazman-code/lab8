import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonRadio, IonButton, IonList, IonRadioGroup } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonRadio, IonButton, IonItem, IonList, IonRadioGroup]
})
export class StatusPage implements OnInit {
  //holds current status value
  status:string = "test";
  //injects ionic for saving and loading
  constructor(private storage:Storage) { }
  //saves selected status to storage
  async saveStatus(){
    console.log("Button Clicked "+this.status)//debug for when button is pressed
    await this.storage.create();//checks storage
    await this.storage.set("myStatus", this.status)//persistence for status
  }

   async ionViewWillEnter(){
    await this.storage.create();//makes sure storage is working
    this.status = await this.storage.get('myStatus')//loads old saved status

  }

  ngOnInit() {
  }

}
