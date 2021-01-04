import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ReqModel } from './models/req-model'
import { ApproveRejectModel } from './models/approve-reject-model'
import { PatchModel } from './models/patch-model'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8080'
  }

  /*############## USER RELATED HTTP REQUESTS #################*/

  getUsersRequests(userId: number): Observable<any> {
    let getEndpoint = '/requests?user_id='
    return this.http.get(this.url + getEndpoint + userId)
  }

  getCertifications(): Observable<any> {
    let getAllCertificationsEndpoint = '/certifications'
    return this.http.get(this.url + getAllCertificationsEndpoint)
  }

  postRequest(certification: ReqModel): Observable<any> {
    let postEndpoint = '/requests'
    return this.http.post(
      this.url + postEndpoint,
      certification,
      this.httpOptions
    )
  }

  deleteOwnRequest(id: number): Observable<any> {
    let delOwnRequest = '/requests/'
    return this.http.delete(this.url + delOwnRequest + id, {
      responseType: 'text',
    })
  }

  updateUserRequest(patch: PatchModel) {
    let userPatchOwnRequestEndpoint = '/requests/'
    return this.http.patch(
      this.url + userPatchOwnRequestEndpoint + patch.id,
      patch
    )
  }

  /*############## ADMIN RELATED HTTP REQUESTS #################*/

  getAllRequests(status: string, id: string): Observable<any> {
    let allRequestsEndpoint =
      '/admin/requests' +
      (status != '' || id != '' ? '?' : '') +
      (status != '' ? 'status=' + status : '') +
      (status != '' && id != '' ? '&' : '') +
      (id != '' ? 'quarter=' + id : '')
    return this.http.get(this.url + allRequestsEndpoint)
  }

  adminPatchRequests(approvereject: ApproveRejectModel) {
    let adminPatchRequestsEndpoint = '/admin/requests/'
    return this.http.patch(
      this.url + adminPatchRequestsEndpoint + approvereject.id,
      approvereject,
      this.httpOptions
    )
  }
}
