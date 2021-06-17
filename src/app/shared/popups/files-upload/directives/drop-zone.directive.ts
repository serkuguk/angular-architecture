import {Directive, Input, Output, EventEmitter, HostListener} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FilesUploadComponent} from '@app/shared/popups/files-upload/files-upload.component';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  @Output() dropped = new EventEmitter<FileList>()
  @Output() hovered = new EventEmitter<boolean>()

  constructor(private dialog: MatDialog) { }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault()
    this.dropped.emit($event.dataTransfer.files)
    this.hovered.emit(false)
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault()
    this.hovered.emit(true)
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault()
    this.hovered.emit(false)
  }


}
