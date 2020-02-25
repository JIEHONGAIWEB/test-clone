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
     this.loadParam();
   }

   loadParam() {
    let params = this.parseUrl(window.location.href)
    console.log('888888',params)
    // this.paramsService.setParams(params);

    // if (params['lang']) {
    //   this.i18nService.use(params['lang'])
    // }
  }

  parseUrl(url) {
    var params = {};
    if (url) {
      if (url.indexOf('?') == -1) {
        return params;
      };
      var arrUrlParts = url.split('?');
      var baseUrl = arrUrlParts[0];
      var urlParameters = arrUrlParts[1].split('&');
      for (var i = 0; i < urlParameters.length; i++) {
        var nameValue = urlParameters[i].split('=');
        params[nameValue[0]] = decodeURI(nameValue[1]).trim()//.push({ baseUrl: baseUrl, key: nameValue[0], value: nameValue[1] });
      };
      return params;
    };
  }


}
