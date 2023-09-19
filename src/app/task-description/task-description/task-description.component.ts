import { Component, Input, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.css']
})
export class TaskDescriptionComponent {

  public Editor = ClassicEditor;
  data: string = `<p>Add a description... </p>`;

  simpleItems: string[] = [
    'Task 1 name changed',
    'Task 2 completed require additional fucntions',
    'Project name changed'
  ];

  fileToUpload: File | null = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
