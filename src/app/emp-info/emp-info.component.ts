import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers:[RecordsService]
})
export class EmpInfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromServiceClass1(){
    this.infoReceived1 = this.rsevicers.getinfo1()
  }
  getInfoFromServiceClass2(){
    this.infoReceived2 = this.rsevicers.getinfo2()
  }
  getInfoFromServiceClass3(){
    this.infoReceived3 = this.rsevicers.getinfo3()
  }
  constructor(private rsevicers : RecordsService) { }

  ngOnInit(): void {
  }
  updateInfo(frm: any){
    this.rsevicers.addInfo(frm.value.location)
  }
  
}
