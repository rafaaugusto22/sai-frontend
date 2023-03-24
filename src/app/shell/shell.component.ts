import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { I18nService } from '@app/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '@app/core';
import { UtilService } from '../shared/util.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(
    private router: Router,
    private i18nService: I18nService,
    private autenticacaoService: AutenticacaoService,
    private utilService: UtilService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    $('#sidebarToggle, #sidebarToggleTop').on('click', function(e) {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      // if ($('.sidebar').hasClass('toggled')) {
      //   $('.sidebar .collapse').collapse('hide')
      // }
    });
  }
  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.autenticacaoService.logout();
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  } 

  allowed(funcionalidade = null) {
    if (funcionalidade) {
      const f = this.utilService.getFuncionalidade(funcionalidade);
      return !f.roles || (!f.disabled && this.autenticacaoService.hasOneRole(f.roles));
    }
    return true;
  }
 
}
