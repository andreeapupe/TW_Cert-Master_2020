import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FilterModalComponent } from '../filter-modal/filter-modal.component'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ChangeStatusModalComponent } from '../change-status-modal/change-status-modal.component'
import { DeleteModalComponent } from '../../USER_RELATED/delete-modal/delete-modal.component'
import { HttpService } from '../../http.service'
import { ApproveRejectModel } from 'src/app/models/approve-reject-model'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  approverejectcopy: ApproveRejectModel
  public downloadLink: string
  allCertifications: string[]
  faFileExcel = faFileExcel
  public filterStatus: string = ''
  public filterQuarter: string = ''
  term: string

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.httpService.getAllRequests('', '').subscribe((response) => {
      this.allCertifications = response as string[]
      console.log(this.allCertifications)
    })
    this.getDownloadLink()
  }

  openExcelSnackBar() {
    this.snackBar.open('Your download will begin in a moment', 'Dismiss', {
      duration: 3000,
    })
  }

  openDialogFilterModal() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      data: { status: this.filterStatus, quarter: this.filterQuarter },
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        this.filterQuarter = result.quarter
        this.filterStatus = result.status
        this.getDownloadLink()
        this.httpService
          .getAllRequests(result.status, result.quarter)
          .subscribe((response) => {
            this.allCertifications = response
          })
      }
    })
  }

  openDialogAcceptReject(id: number, status: string) {
    let approveObject: ApproveRejectModel = { id: id, status: status }
    const dialogRef = this.dialog.open(ChangeStatusModalComponent, {
      data: { body: approveObject },
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getAllRequests('', '').subscribe((response) => {
        this.allCertifications = response
      })
    })
  }

  deleteDialog(id: number) {
    const dialog = this.dialog.open(DeleteModalComponent, { data: { id: id } })
    console.log('The delete dialog was closed')

    dialog.afterClosed().subscribe((result) => {
      this.httpService.getAllRequests('', '').subscribe((response) => {
        this.allCertifications = response as string[]
        console.log(this.allCertifications)
      })
    })
  }

  getDownloadLink() {
    this.downloadLink =
      'http://localhost:8080/admin/requests/excel' +
      (this.filterStatus != '' || this.filterQuarter != '' ? '?' : '') +
      (this.filterStatus != '' ? 'status=' + this.filterStatus : '') +
      (this.filterStatus != '' && this.filterQuarter != '' ? '&' : '') +
      (this.filterQuarter != '' ? 'quarter=' + this.filterQuarter : '')
  }
}
