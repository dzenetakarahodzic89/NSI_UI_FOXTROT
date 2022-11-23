import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Action} from '../../models/common.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() actionColumns: Action[] = [];
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() baseLink: string = '';
  @Output() delete? = new EventEmitter<string>();

  allColumns: string[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.allColumns = [...this.displayedColumns];
    this.actionColumns.forEach(action => {
      switch (action) {
        case Action.DELETE:
          this.allColumns.push('Delete');
          break;
        case Action.EDIT:
          this.allColumns.push('Edit');
          break;
        case Action.VIEW:
          this.allColumns.push('View');
          break;
      }
    })
  }

  onBtnClick(id: string, route: string): void {
    if (route === '') {
      this.router.navigateByUrl(`/${this.baseLink}/${id}`);
    }
    else
      this.router.navigateByUrl(`/${this.baseLink}/${id}/${route}`);
  };

  deleteElement(id: string) {
    this.delete.emit(id);
  }

}
