import { TestBed } from '@angular/core/testing'

import { HttpService } from './http.service'

import { HttpClientModule } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

describe('HttpService', () => {
  let service: HttpService
  let httpTestingController: HttpTestingController
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientModule, HttpClientTestingModule],
    })
    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.inject(HttpService)
    httpMock = TestBed.get(HttpTestingController)
  })

  it('should get the data successful', () => {
    service.getCertifications().subscribe((data: any) => {
      expect(data.certificationTitle).toBe('PMP')
    })

    const req = httpMock.expectOne(
      `http://localhost:8080/certifications`,
      'call to api'
    )
    expect(req.request.method).toBe('GET')

    req.flush({
      certificationTitle: 'PMP',
    })

    httpMock.verify()
  })
})
