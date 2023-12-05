import { Component,OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { fsl1 } from '../service/fsl1.service';
@Component({
  selector: 'app-fsl1',
  templateUrl: './fsl1.component.html',
  styleUrls: ['./fsl1.component.scss']
})
export class FSL1Component implements OnInit {
  faceSnaps!: FaceSnap[];
  ngOnInit() :void{
  this.faceSnaps = this.fsl1.faceSnaps;
}
constructor(private fsl1:fsl1) { }
}