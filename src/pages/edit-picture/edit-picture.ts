import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditPicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-picture',
  templateUrl: 'edit-picture.html',
})
export class EditPicturePage {

  constructor(
    public navCtrl: NavController) {
  }

  ionViewDidLoad() {

  }
  
// go back to my photos page
  onBackButton(){
    this.navCtrl.push('MyPhotosPage')
  }
}
