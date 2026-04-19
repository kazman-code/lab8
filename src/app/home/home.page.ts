import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonItem } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, RouterLink],
})
export class HomePage {
  //holds the stored value gotten from ionic storage
  myStatus:string ="";
  //injects ionic storage service into the component
  constructor(private storage:Storage) {}
//async method that runs when page is active
  async ionViewWillEnter(){
    await this.storage.create();//makes sure storage is initialised
    this.myStatus = await this.storage.get('myStatus')//gets saved values

  }
}
