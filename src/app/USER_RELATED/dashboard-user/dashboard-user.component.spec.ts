import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardUserComponent } from './dashboard-user.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { HttpClientModule } from '@angular/common/http'
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'

describe('DashboardUserComponent', () => {
  let component: DashboardUserComponent
  let fixture: ComponentFixture<DashboardUserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserComponent],
      imports: [Ng2SearchPipeModule, HttpClientModule, MatMenuModule],
      providers: [
        MatDialog,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
