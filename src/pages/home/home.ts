import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage} from '@ionic/storage';
import { GetvaluePage } from '../getvalue/getvalue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage:Storage) {
    storage.ready().then(
      ()=>{
        //set data to local storage
        storage.set("username",'Wanvisa Suwannin');
        storage.set("studentId",'6042040909');
      }
    );
  }


  gotoGetvalue(){
    this.navCtrl.push(GetvaluePage);
  }
}
