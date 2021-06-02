import {EmployeeInterface} from '@app/shared/types/backend/types/employee-interface'
import {RecruiterInterface} from '@app/shared/types/backend/types/recruiter-interface'
import firebase from 'firebase'
import firestore = firebase.firestore

export interface UserInterface {
  uid: string
  name: string
  photoURL: string
  email: string
  country: string
  about: string | null
  roleId: string
  role: EmployeeInterface | RecruiterInterface
  created: firestore.FieldValue
  updated?: firestore.FieldValue
}
