import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

@Component({
  selector: 'loading-modal',
  templateUrl: 'build/components/loading-modal/loading-modal.html',
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})
export class LoadingModal {

  constructor() {
    this.isBusy = false;
  }

  show(){
    console.log('afafd');
    this.isBusy = true;
    console.log(this.isBusy);
  }

  hide(){
    this.isBusy = false;
  }

}
