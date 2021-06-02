import firebase from 'firebase'
import firestore = firebase.firestore

export interface JobInterface {
  title: string
  salary: number
  created: firestore.FieldValue
  updated: firestore.FieldValue
}
