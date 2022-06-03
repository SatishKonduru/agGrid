import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-update-row-data',
  templateUrl: './update-row-data.component.html',
  styleUrls: ['./update-row-data.component.css']
})
export class UpdateRowDataComponent implements OnInit {

  private _gridAPI : GridApi
  Batch1 = [
    {name: "Satish", course: "Angular", price: 35000},
    {name: "RSK", course: "React", price: 25000},
    {name: "Renu", course: "Vue", price: 15000}
  ]
  Batch2 = [
    {name: "Nagesh", course: "Bootstrap", price: 20000},
    {name: "Chikkie", course: "NodeJS", price: 45000},
    {name: "Micky", course: "MongoDB", price: 25000}
  ]

  columnDefs: ColDef[] = [
    {field: 'name'},
    {field: 'course'},
    {field: 'price'}
  ]
  rowData: any[] | null
  rowSelection= 'single'
  constructor() { }

  onBatch1(){
    this._gridAPI.setRowData(this.Batch1)
  }
  onBatch2(){
    this._gridAPI.setRowData(this.Batch2)
  }

  ngOnInit(): void {
  }

  onGridReady(p: GridReadyEvent){
    this._gridAPI = p.api
  }
}
