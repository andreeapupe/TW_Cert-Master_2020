import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { LoginSignupComponent } from './login-signup.component'

describe('LoginSignupComponent', () => {
  let component: LoginSignupComponent
  let fixture: ComponentFixture<LoginSignupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSignupComponent],
      imports: [FormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
