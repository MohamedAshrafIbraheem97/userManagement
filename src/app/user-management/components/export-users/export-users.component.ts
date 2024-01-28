import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-export-users',
  templateUrl: './export-users.component.html',
  styleUrls: ['./export-users.component.scss'],
})
export class ExportUsersComponent {
  @Input() dataToBeExported!: HTMLElement;
  exportToExcel(): void {
    // Create a new workbook
    const wb: XLSX.WorkBook = { Sheets: {}, SheetNames: [] };
    const wsName = 'Sheet1';

    // Convert table data to worksheet
    const table = document.getElementById('dataToBeExported');
    const ws = XLSX.utils.table_to_sheet(table);

    // Add worksheet to workbook
    wb.Sheets[wsName] = ws;
    wb.SheetNames.push(wsName);

    // Export workbook to Excel file
    XLSX.writeFile(wb, 'table_data.xlsx');
  }
}
