import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

interface Column {
  name: string;
  type: 'text' | 'number' | 'date' | 'boolean';
  required?: boolean;
}

@Component({
  selector: 'app-column-definition',
  templateUrl: './column-definition.component.html'
})
export class ColumnDefinitionComponent {
  @Output() columnsDefined = new EventEmitter<Column[]>();
  columnForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.columnForm = this.fb.group({
      columns: this.fb.array([this.createColumn()])
    });
  }

  get columns() {
    return this.columnForm.get('columns') as FormArray;
  }

  createColumn(): FormGroup {
    return this.fb.group({
      name: [''],
      type: ['text'],
      required: [false]
    });
  }

  addColumn() {
    this.columns.push(this.createColumn());
  }

  removeColumn(index: number) {
    this.columns.removeAt(index);
  }

  generateGrid() {
    if (this.columnForm.valid) {
      this.columnsDefined.emit(this.columnForm.value.columns);
    }
  }
}