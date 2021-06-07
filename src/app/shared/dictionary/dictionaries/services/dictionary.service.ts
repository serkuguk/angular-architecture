import {Injectable} from '@angular/core'
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore'
import {Observable, of, zip} from 'rxjs'
import {map, take} from 'rxjs/operators'

import * as jsonCountries from '@src/assets/countries.json'
import {ItemInterface} from '@app/shared/types/frontend/types/item-interface'
import {ControlItemInterface} from '@app/shared/types/frontend/types/control-item-interface'
import {DictionaryInterface} from '@app/shared/dictionary/dictionaries/types/dictionary-interface';

@Injectable()
export class DictionaryService {

  constructor(private afs: AngularFirestore) {}

  getDictionaries(): Observable<any> {
    return zip(
        this.afs.collection('roles').snapshotChanges().pipe(
          take(1),
          map(items => items.map(x => this.documentToItem(x)))
        ),
        this.afs.collection('specializations').snapshotChanges().pipe(
          take(1),
          map(items => items.map(x => this.documentToItem(x)))
        ),
        this.afs.collection('qualifications').snapshotChanges().pipe(
          take(1),
          map(items => items.map(x => this.documentToItem(x)))
        ),
        this.afs.collection('skills').snapshotChanges().pipe(
          take(1),
          map(items => items.map(x => this.documentToItem(x)))
        ),
        of((jsonCountries as any).default.map(country => ({
            id: country.code.toUpperCase(),
            name: country.name,
            icon: {
              src: null,
              cssClass: `fflag fflag-${country.code.toUpperCase()}`
            }
          })
        ))
    )
  }

  documentToItem(item: DocumentChangeAction<any>): number {
    const data = item.payload.doc.data()
    return {
      ...data,
      id: item.payload.doc.id
    }
  }

  addDictionary (items: ItemInterface[]): DictionaryInterface {
   return {
     items,
     controlItems: [...items].map(item => this.itemToControlItem(item))
   }
  }

  itemToControlItem (item: ItemInterface): ControlItemInterface {
    return {
      value: item.id,
      label: item.name,
      icon: item.icon
    }
  }
}
