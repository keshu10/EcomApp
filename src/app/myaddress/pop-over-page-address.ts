import { Component }                                     from '@angular/core';
import {PopoverController} from '@ionic/angular';
import{ Router,ActivatedRoute }         from '@angular/router';

@Component({
	selector    : 'popover-page',
	template : `
		<span>
			<ion-item (click)="filterAddress('edit')"> <h6>Edit </h6></ion-item>
			<ion-item (click)="filterAddress('delete')"> <h6>Delete </h6></ion-item>
		</span>
	`
})
export class PopOverPageAddress {
	constructor(
		public popoverCtrl  : PopoverController,
		private router      : Router, 
		private route       : ActivatedRoute) {
		
	}
	
	//filterAddress to Address
	filterAddress(type : any) {
		var self = this;
		self.popoverCtrl.dismiss(type);
	}
}