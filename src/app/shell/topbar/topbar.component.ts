import { Component, OnInit} from '@angular/core';
import { AutenticacaoService} from '@app/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  constructor(private autenticacaoService :AutenticacaoService) {}

  ngOnInit() {}


  get username(): string | null {
     const credentials = this.autenticacaoService.getKc().tokenParsed;
    return credentials ? credentials.name : null;
  return null;
  }

  get matricula(): string | null {
     const credentials = this.autenticacaoService.getKc().tokenParsed;
    return credentials ? credentials.preferred_username : null;
  return null;
  }
}
