import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../filter-modal/filter-modal.component'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  faFileExcel = faFileExcel
  public filterStatus: string = ''
  public filterQuarter: string = ''

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialogFilterModal() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      data: { status: this.filterStatus, quarter: this.filterQuarter },
    })
  }
}
