import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  items: Item[];
  error:boolean;
  displayedColumns: string[] = ['message', 'time', 'status'];
                    
  constructor(
    private ds: DataService,
    private _bottomSheet: MatBottomSheet
  ) {}
  
  ngOnInit(): void {
    this.ds.getItems().subscribe(
      response => {
        this.items = response as Item[];
      },
      err => {
        console.log(err);
        this.error = true;
      }
    );
  }
  // openBottomSheet(): void {
  //   this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  // }
}
// @Component({
//   selector: 'bottom-sheet-overview-example-sheet',
//   templateUrl: 'bottom-sheet-overview-example-sheet.html',
// })
// export class BottomSheetOverviewExampleSheet {
//   constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

//   openLink(event: MouseEvent): void {
//     this._bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }



