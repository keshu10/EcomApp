import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { Routes, RouterModule }     from '@angular/router';
import { IonicModule }              from '@ionic/angular';
import { PopOverPageAddress }  from './pop-over-page-address';

const routes: Routes = [
  {
    path: '',
    component: PopOverPageAddress
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  //comment declaration and defines PopOverPageAddress in entryComponents 
  declarations: [PopOverPageAddress],
  entryComponents: [
	PopOverPageAddress
	]
  
})
export class PopOverPageAddressModule {}