import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
private _dataURL = '../../assets/sharedData/data.json'
  constructor(private _http: HttpClient) { }
getEmpData(){
return  this._http.get<any>(this._dataURL)
}

}
