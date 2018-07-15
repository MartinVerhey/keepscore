import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
// import { ApiService } from '../../../providers/api-service';

/*
  Generated class for the AddPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html'
})
export class AddPlayerPage {
  user: string;
  userData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private toastCtrl: ToastController
  ) {}

  // Return to previous page
  popPage() {
    this.navCtrl.pop();
  }

  savePlayer() {
    if (this.user.length <= 10) {
      this.presentToast('User was added successfully');
      this.popPage();
    } else if (this.user.length > 10) {
      this.presentToast('Only 10 characters allowed');
    }
  }

  presentToast(text:string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
    });

    toast.present();
  }


}
