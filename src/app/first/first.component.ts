import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';

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

}
