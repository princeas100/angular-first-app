import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html'
})
export class DataGridComponent {
  @Input() columns: any[];
  @Output() dataUpdated = new EventEmitter<any[]>();
  dataForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      rows: this.fb.array([])
    });
  }

  get rows() {
    return this.dataForm.get('rows') as FormArray;
  }

  addRow() {
    const rowGroup = this.fb.group({});
    this.columns.forEach(column => {
      rowGroup.addControl(column.name, this.fb.control(''));
    });
    this.rows.push(rowGroup);
  }

  removeRow(index: number) {
    this.rows.removeAt(index);
  }

  exportData() {
    this.dataUpdated.emit(this.dataForm.value.rows);
  }
}