import { Component, OnInit } from '@angular/core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { MatDialog } from '@angular/material/dialog'
import { AddRequestComponent } from '../../USER_RELATED/add-request/add-request.component'

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
})
export class DashboardUserComponent implements OnInit {
  faEdit = faEdit
  faPlus = faPlus
  term: string

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialogNewRequest() {
    const dialogRef = this.dialog.open(AddRequestComponent)
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
    })
  }
}
