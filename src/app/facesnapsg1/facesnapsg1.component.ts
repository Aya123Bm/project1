import { Component, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './facesnapsg1.component.html',
  styleUrls: ['./facesnapsg1.component.scss']
  
})

export class Facesnapsg1Component {
  @Input() faceSnap!: FaceSnap; 
    title!: string;
    description! : string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!:string;
    buttonText!:string;
    ngOnInit(){
    this.buttonText= "Oh Snap!";
  }
  onSnap(){
    if(this.buttonText=='Oh Snap!'){
      this.snaps++;
      this.buttonText='Oops,unSnap!';
    }
    else{
      this.snaps--;
      this.buttonText='Oh Snap!';
    }
  }
}




