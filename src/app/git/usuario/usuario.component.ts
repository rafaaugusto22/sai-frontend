import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { GitService } from '../../shared/services/git.service';
import {MessageService} from '@app/core';
import { NgxSpinnerService } from "ngx-spinner";
import { UtilService } from '../../shared/util.service';

import { environment } from '@env/environment';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  
  submitted = false;
  currentFile = null;
  
  @ViewChild("labelImport", {static: false}) labelImport: ElementRef;
  @ViewChild("customFile", {static: false}) customFile: ElementRef;


  constructor(
  private gitService: GitService,
  private formBuilder: FormBuilder,
  private messageService: MessageService,
  private spinner: NgxSpinnerService,
  private utilService: UtilService)
   {
    
  }

  uploadForm = this.formBuilder.group({
    customFile:  [''],
    imageInput:['', Validators.required]
 });
  
  ngOnInit() {
    
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('customFile').setValue(file);
      this.labelImport.nativeElement.innerText = file.name;
      this.uploadForm.controls['imageInput'].setValue(file ? file.name : '');
    }
  }

  onSubmit() {
    this.submitted=true;
     if (this.uploadForm.invalid) {
        return;
    } 
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('customFile').value);
    this.cadastrarUsuarioRepositorioExcel(formData);
    console.warn('Your order has been submitted', this.uploadForm.value);
    
    
  }

  onReset() {
        this.customFile.nativeElement.value = "";
        this.labelImport.nativeElement.innerText = "Escolha um arquivo";
        this.uploadForm.get('customFile').setValue("");
        this.uploadForm.reset();
        
    }

    cadastrarUsuarioRepositorioExcel(data) {
    this.spinner.show();
    this.gitService.cadastrarUsuarioRepositorioExcel(data).subscribe(response => {
      this.messageService.enviarMensagemSucesso();
      this.spinner.hide();
      this.utilService.downLoadFile(response, "log.txt","application/text")
    }, erro => {
      this.messageService.enviarMensagem(erro);
      this.spinner.hide();
      }
    );
  }

  
    // convenience getter for easy access to form fields
    get f() { 
      return this.uploadForm.controls; }
}
