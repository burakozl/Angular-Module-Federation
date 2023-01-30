import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDataSource } from '../data';
import { EditService, ToolbarService, PageService, NewRowPosition } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [CommonModule, CheckBoxModule, DropDownListAllModule, DatePickerAllModule, ToolbarModule, NumericTextBoxAllModule, DialogModule, GridAllModule],
  providers: [ToolbarService, EditService, PageService]
})
export class EmployeesComponent {

  @ViewChild('ddsample')
  public dropDown!: DropDownListComponent;
  public data!: Object[];
  public editSettings!: Object;
  public toolbar!: string[];
  public orderidrules!: Object;
  public customeridrules!: Object;
  public freightrules!: Object;
  public editparams!: Object;
  public pageSettings!: Object;
  public formatoptions!: Object;

  public ngOnInit(): void {
    this.data = orderDataSource;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.orderidrules = { required: true, number: true };
    this.customeridrules = { required: true };
    this.freightrules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
    this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' }
  }

  public newRowPosition: { [key: string]: Object }[] = [
    { id: 'Top', newRowPosition: 'Top' },
    { id: 'Bottom', newRowPosition: 'Bottom' }
  ];
  public localFields: Object = { text: 'newRowPosition', value: 'id' };

  public onChange(e: ChangeEventArgs): void {
    let gridInstance: any = (<any>document.getElementById('Normalgrid')).ej2_instances[0];
    (gridInstance.editSettings as any).newRowPosition = <NewRowPosition>this.dropDown.value;
  }

  actionBegin(args: any): void {
    let gridInstance: any = (<any>document.getElementById('Normalgrid')).ej2_instances[0];
    if (args.requestType === 'save') {
      if (gridInstance.pageSettings.currentPage !== 1 && gridInstance.editSettings.newRowPosition === 'Top') {
        args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - gridInstance.pageSettings.pageSize;
      } else if (gridInstance.editSettings.newRowPosition === 'Bottom') {
        args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - 1;
      }
    }
  }
}
