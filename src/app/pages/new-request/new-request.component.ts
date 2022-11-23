import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentType } from 'src/app/models/documentType.model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  requests: DocumentType[] = [];
  selectedReq;
  fileName: string;
  formData = new FormData();
  documentTypes;
  response = null;

  isEditMode = false;


  constructor(private router: Router, private route: ActivatedRoute, private documentService: DocumentService) {
    this.documentService.getAllDocumentType().subscribe(res => {
      this.requests = res.data;
    }) // .unsubscribe()
  }

  ngOnInit(): void {
    const requestId = this.route.snapshot.params.id;
    this.documentService.getDocument(requestId)
      .subscribe(response => this.response = response)
      // .unsubscribe();

    const urlSegments = this.route.snapshot.url;
    if(urlSegments.length === 3 && urlSegments[2].path === 'edit')
      this.isEditMode = true;
  }

  preview(id) {
    this.router.navigateByUrl(`/document/${id}`);
  }

  onFileSelected(event) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.formData.append('document', file);
    }
  }

  onSave() {
    if(!this.selectedReq || !this.formData.has('document')) {
      alert('Validation failed!');
      return;
    } else {
      const requestId = this.route.snapshot.params.id;
      this.formData.append('documentTypeId', this.selectedReq);
      this.documentService.addDocument(requestId, this.formData)
        .subscribe(response => this.response = response)
        // .unsubscribe();
    }
  }

}