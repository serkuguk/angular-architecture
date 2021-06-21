import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogDataInterface} from '@app/shared/popups/files-upload/types/dialog-data-interface';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

  isHovering: boolean
  files: File[] = []
  imageFile: File
  isError: boolean

  filesUrls: string[] = []

  constructor(private dialogRef: MatDialogRef<FilesUploadComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogDataInterface) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event
  }

  onDrop(files: FileList) {
    this.isError = false

    if (this.data.crop && files.length > 1) {
      this.isError = true
      return
    }

    if (this.data.crop &&
      files.length === 1 &&
      files.item(0).type.split('/')[0] === 'image') {
      this.imageFile = files.item(0)
      return
    }

    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i))
    }
  }

  onUploadComplete(url: string): void {
    this.filesUrls.push(url)
  }

  onClose(): void {
    this.dialogRef.close()
  }

  onComplete(): void {
    const res = this.data.multiple ? this.filesUrls : this.filesUrls[0]
    this.dialogRef.close(res)
  }

  onCrop(file: File): void {
    this.imageFile = null
    this.files.push(file)
  }
}
