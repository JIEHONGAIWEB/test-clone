import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aspp';
  using(){
    // 定义数据源
    let onSubscribe = (observer)=>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
    
    }
    // 定义数据源
      const source$ = Observable.create(onSubscribe);
    // 对每一个数据，进行操作
      source$.map((item)=>{
        return item +1;
      }).subscribe((res)=>{console.log(res)});
   }
   constructor(){
     this.using();
   }


}
