import { Component, OnInit } from '@angular/core'
import { HttpService } from 'src/app/http.service'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { MatDialog } from '@angular/material/dialog'
import { AddRequestComponent } from '../../USER_RELATED/add-request/add-request.component'
import { DeleteModalComponent } from '../delete-modal/delete-modal.component'
import { PatchModel } from 'src/app/models/patch-model'
import { CertificationsModel } from 'src/app/models/certifications-model'

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
})
export class DashboardUserComponent implements OnInit {
  faEdit = faEdit
  faPlus = faPlus
  term: string
  arrCertifications: CertificationsModel[]

  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.httpService.getUsersRequests(5).subscribe((response) => {
      this.arrCertifications = response
    })
  }

  openDialogNewRequest() {
    const dialogRef = this.dialog.open(AddRequestComponent)

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getUsersRequests(5).subscribe((response) => {
        this.arrCertifications = response
      })
    })
  }

  openDialogEdit(req: PatchModel) {
    const dialogRef = this.dialog.open(AddRequestComponent, {
      data: { body: req, edit: true },
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.httpService.getUsersRequests(5).subscribe((response) => {
        this.arrCertifications = response
      })
    })
  }

  deleteDialog(id: number) {
    const dialog = this.dialog.open(DeleteModalComponent, { data: { id: id } })
    console.log('The delete dialog was closed.')

    dialog.afterClosed().subscribe((result) => {
      this.httpService.getUsersRequests(5).subscribe((response) => {
        this.arrCertifications = response
      })
    })
  }
}
