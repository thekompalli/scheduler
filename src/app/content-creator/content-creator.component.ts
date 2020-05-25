import { Component, OnInit, Input ,Output ,EventEmitter} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-content-creator',
  templateUrl: './content-creator.component.html',
  styleUrls: ['./content-creator.component.scss']
})

export class ContentCreatorComponent implements OnInit {
  
  isHidden = true;
  editHidden = true;
  htmlContent;
  

  ngOnInit(): void {
  }
  @Input('getContent') getContent;

  divUnhide(){
    this.isHidden = false;
  }
  save(){
    this.isHidden = true;
  }
  edit(){
    this.editHidden = false;
    console.log(this.editHidden)
  }
  closeEdit(){
    this.editHidden = true;
  }
   
editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['bold', 'italic'],
    ['fontSize']
  ]
};
  
}
