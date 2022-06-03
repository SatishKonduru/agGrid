import { Component, OnInit } from '@angular/core';
import { ColDef, ValueGetterParams } from 'ag-grid-community';

@Component({
  selector: 'app-value-getter',
  templateUrl: './value-getter.component.html',
  styleUrls: ['./value-getter.component.css']
})
export class ValueGetterComponent implements OnInit {

  columnDefs: ColDef[] = [
    {
      headerName: '#',
      maxWidth: 100,
      valueGetter: (params: ValueGetterParams)=>{
        return params.node ? params.node.rowIndex : null
      }
    },
    {
      field: 'x'
    },
    {
      field: 'y'
    },
    {
      headerName: 'X + Y',
      colId: 'x&y',
      valueGetter: (p: ValueGetterParams)=>{
        return p.data.x + p.data.y
      }
    },
    {
      headerName: 'X * 1000',
      minWidth: 95,
      valueGetter: (p: ValueGetterParams)=>{
        return p.data.x * 1000
      }
    },
    {
      headerName: 'Y * 200',
      minWidth: 95,
      valueGetter: (p: ValueGetterParams)=>{
        return p.data.y * 200
      }
    },
    {
      headerName: 'Random',
      minWidth: 90,
      valueGetter: ()=> {
        return Math.floor(Math.random() * 100)
      }
    },
    {
      headerName: 'Chain',
      valueGetter: (p: ValueGetterParams)=>{
        return p.getValue('x&y') * 1000
      }
    },
    {
      headerName: 'Constant',
      minWidth: 85,
      valueGetter: ()=> {return 777}
    }
  ]

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 75
  }

  rowData: any[] | null = this.createRowData()
  constructor() { }

  ngOnInit(): void {
  }

  createRowData(){
    this.rowData = []
    for(let i = 0; i <= 10 ; i++){
      this.rowData.push(
        {
          x: Math.floor(i % 4),
          y : Math.floor(i % 7)
        }
      )
    }
    return this.rowData
  }

}
