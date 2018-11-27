import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  val;
  type; // Day or Overnight
  dateSlept;
  timeSlept;
  dateWoke;
  timeWoke;

  constructor(public sleepService:SleepService, public modalCtrl: ModalController, public navParams: NavParams) {
    this.val = this.navParams.get('value');
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  segmentChanged(time: any) {
    console.log(time.detail.value);
    this.type = time.detail.value;
    console.log("TYPEE: " + this.type)
  }

  dateChanged(date: any) {
    console.log("Date: ", date)
  }
  
  timeChanged(time: any) {
    console.log("Time: ", time)
  }
}

// export class SleepTimeSegment implements OnInit {

//   segmentChanged(time: any) {
//     console.log("Time: ", time);
//   }
  

// }
