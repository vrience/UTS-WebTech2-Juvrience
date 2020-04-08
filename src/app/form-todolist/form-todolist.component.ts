import { Component, OnInit } from '@angular/core';
import {  Item } from '../item';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-form-todolist',
  templateUrl: './form-todolist.component.html',
  styleUrls: ['./form-todolist.component.scss']
})
export class FormToDoListComponent implements OnInit {
  item: Item = {
    _id: '',
    message: '',
    time: '',
    status: 'Undone',
  };
  id = null;
  error = false;
  update = true;

  constructor(
    private _snackBar: MatSnackBar,
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // jika ada parameter id di URL
      if (params.get('id')) {
        this.id = params.get('id');

        this.ds.getItem(this.id).subscribe(
          response => {
            this.item = response as Item;
          },
          err => {
            console.log(err);
            this.error = true;
          }
        );
      } else {
        this.update = false;
      }
    });
  }

  postItem() {
    this.ds.postItem(this.item).subscribe(response => {
      // tampilkan notifikasi
      this.openSnackBar("To Do List Added", null)
      this.router.navigate(['/first']);
    });
  }

  deleteItem() {
    this.ds.deleteItem(this.item).subscribe(
      response => {
        // tampilkan notifikasi
        this.openSnackBar("To Do List Deleted", null)
        this.router.navigate(['/first']);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateItem() {
    this.ds.updateItem(this.item).subscribe(
      response => {
        // tampilkan notifikasi
        this.openSnackBar("To Do List Updated", null)
        this.router.navigate(['/first']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
