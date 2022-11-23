import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data = '';

  ngOnInit(): void {
    const documentId = this.route.snapshot.params.id;
    this.data = `https://nsi-dev-api-foxtrot.azurewebsites.net/api/documents/${documentId}`;
    console.log(this.data);
  }

}
