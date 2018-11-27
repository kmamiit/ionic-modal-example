import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	// dateSlept;
	// dateAwaken;
	// timeSlept;
	// timeAwaken;
	constructor(public sleepService:SleepService, public modalCtrl:ModalController) {
		// this.dateSlept = SleepData;
	}



	ngOnInit() {
		// console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	// Added these other getter methods
	get allOvernightSleepData() {
		return SleepService.AllOvernightData;
	}

	get allStanfordSleepinessData() {
		return SleepService.AllSleepinessData;
	}

	async presentModal() {
		const modal = await this.modalCtrl.create({
			component: ModalPage,
			componentProps: { value: 123 } 
		});

		await modal.present();
	}
}

