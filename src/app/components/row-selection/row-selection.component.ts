import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-row-selection',
  templateUrl: './row-selection.component.html',
  styleUrls: ['./row-selection.component.css']
})
export class RowSelectionComponent implements OnInit {
private _dataURL = '../../../assets/sharedData/rowSelection.json'
  private _gridAPI: GridApi
  // public rowSelection='single'
  public rowSelection='multiple'
  rowData : any[] ;
  public mySelection = new BehaviorSubject<any>('')

  constructor(private _http: HttpClient) { }
columnDefs : ColDef[] = [
  {
    headerName: 'Name',
    field: 'name',
    sortable: true,
    filter: true,
    checkboxSelection: true,
    headerCheckboxSelection: true
  },
  {
    field: 'course',
    sortable: true
  },
  {
    field: 'age',
    sortable: true
  }
]
  ngOnInit(): void {
  }
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100
  }

  onGridReady(params: GridReadyEvent){
    this._gridAPI = params.api
    this._http.get<any[]>(this._dataURL)
    .subscribe((data) => (this.rowData= data))
  }

  onSelectionChanged(){
    const selectedRow = this._gridAPI.getSelectedRows()
    .map(row => row.name)
    this.mySelection.next(selectedRow)
  }
}
