import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError,retry } from "rxjs/operators";
import { Warehouse } from "src/app/models/warehouse.model";
import { WarehouseZone } from "src/app/models/warehouseZone.model";
import { BaseService } from "./base.service";
import { Response } from "./Response/response.model";

@Injectable({
  providedIn:'root'
})
export class WarehouseService extends BaseService{
  list:Warehouse[] = new Array();
  form:Warehouse;
  form2:WarehouseZone;

  constructor(http:HttpClient){
    super(http);
    this.apiUrl+= 'api/warehouse/';
    this.form2 = new WarehouseZone();
    this.form = new Warehouse();
  }
  async getAll(){
    let result = await this.http.get<Response<Warehouse[]>>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    ).toPromise();
    if(result.error!=null){
      this.handleError(result.error);
    }
    this.list = result.data;
  }

  async getById(id:string){
    let result = await this.http.get<Response<Warehouse>>(this.apiUrl+id).toPromise();
    this.form = result.data;
  }

  addLocation(){
    if(this.form2.finPasillo<this.form2.initPasillo || this.form2.finTramo<this.form2.initTramo){
      return;
    }
    let data = this.form.zones.sort((x,y)=>{
      if(x.id>y.id){
        return 1;
      }
      if(x.id<y.id){
        return -1;
      }
      return 0;
    });
    let last = data[data.length-2];
    if(last==null){
      this.form2.id = 1;
      this.form2.warehouseId = this.form.id;
      data.push({...this.form2});
    }
    else{
      let pasillo = data.find(x=> this.form2.initPasillo >= x.initPasillo  && this.form2.initPasillo <= x.finPasillo)??null;
      if(pasillo!=null)
      {
        let tramo = data.find(x=> (this.form2.initPasillo >= x.initPasillo && this.form2.initTramo >= x.initTramo)  &&
        (this.form2.initPasillo <= x.finPasillo && this.form2.initTramo <= x.finTramo))??null;
        if(tramo !=null){
          console.log("UNICACION EXISTE");
        }
        else{
          this.form2.id = last.id+1;
          this.form2.warehouseId = last.warehouseId;
          data.push({...this.form2});
          this.form2 = new WarehouseZone();
        }
      }
    }
  }

  refleshList(){
    this.http.get<Response<Warehouse[]>>(this.apiUrl)
      .toPromise()
      .then(res=>{
        this.list = res.data;
      })
  }

  async update(){
    return await this.http.put<boolean>(this.apiUrl+this.form.id,JSON.stringify(this.form),this.httpOptions).toPromise();
  }

  async create(){
    return await this.http.post<Response<Warehouse>>(this.apiUrl,JSON.stringify(this.form),this.httpOptions).toPromise();
  }
}
