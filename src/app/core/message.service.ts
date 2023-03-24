import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toasterService: ToastrService) {}

  enviarMensagemSucesso() { // status 200: ok
    this.toasterService.success('', 'Operação Realizada com Sucesso');
  }

  enviarMensagemAlerta(mensagem: string) { // status 404: Not Found
    this.toasterService.warning('', mensagem);
  }

  enviarMensagemErro(mensagem: string) { // status 409: Conflict or 400: Bad Request
    this.toasterService.error('', mensagem);
  }

  enviarMensagem (error: any) { // status 409: Conflict or 400: Bad Request
    this.toasterService.error('', error.message);
  }

}
