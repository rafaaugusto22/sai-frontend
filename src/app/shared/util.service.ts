import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private funcionalidades : any;

  constructor() {

    this.funcionalidades = {
      'NEGADO': {},
      'CADASTRO_GIT': { roles: ['admin','SAI0001'] }
    };
  }


  static pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  }

  public getFuncionalidade(id:any) {
    return this.funcionalidades[id] || {};
  }

  public downLoadFile(data: any, name:string, type: string) {
        let blob = new Blob([data], { type: type});
        let url = window.URL.createObjectURL(blob);
        var downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

}
