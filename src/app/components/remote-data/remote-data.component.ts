import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-remote-data',
  templateUrl: './remote-data.component.html',
  styleUrls: ['./remote-data.component.css']
})
export class RemoteDataComponent implements OnInit {

  public rowData: []
  public columnDefs: ColDef[] = [
    {
      headerName: "Name",
      field:'name',
      sortable: true
    },
    {
      field: 'course',
      sortable: true
    },
    {
      headerName: "City",
      field: 'address.city'
    },
    {
      headerName: 'State',
      field: 'address.state'
    },
    {
      headerName: "PinCode",
      field: 'address.pincode'
    }
  ]
  constructor(private _dataService: GetDataService) { }

  ngOnInit(){
    this._dataService.getEmpData()
    .subscribe(res => this.rowData = res,
      err => console.log(err))
  }

}
