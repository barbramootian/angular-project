import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Barbra Reson", "e1234","bmootian@gmail.com"];
  info2: string[] = ["Esther Wafula","f1994" , "ewafula@gmail.com"];
  info3: string[] = ["Sylvia Sara ", "g12346","swakoli@gmail.com"];

  getinfo1(): string[]{
  return this.info1
  }
  getinfo2(): string[]{
    return this.info2
    }
  getinfo3(): string[]{
    return this.info3
      }
  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
