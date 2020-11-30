import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../filter-modal/filter-modal.component'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ChangeStatusModalComponent } from '../change-status-modal/change-status-modal.component'
import { DeleteModalComponent } from '../../USER_RELATED/delete-modal/delete-modal.component'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  faFileExcel = faFileExcel
  public filterStatus: string = ''
  public filterQuarter: string = ''
  term: string

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openExcelSnackBar() {
    this.snackBar.open('Your download will begin in a moment', 'Dismiss', {
      duration: 3000,
    })
  }

  openDialogFilterModal() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      data: { status: this.filterStatus, quarter: this.filterQuarter },
    })
  }

  openDialogAcceptReject() {
    const dialogRef = this.dialog.open(ChangeStatusModalComponent)

    dialogRef.afterClosed().subscribe((result) => {
      console.log()
    })
  }

  deleteDialog() {
    const dialog = this.dialog.open(DeleteModalComponent)
    console.log('The delete dialog was closed.')

    dialog.afterClosed().subscribe((result) => {
      console.log('successful deletion')
    })
  }
}
