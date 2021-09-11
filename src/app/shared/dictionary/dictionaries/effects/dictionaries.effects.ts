import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {HttpErrorResponse} from '@angular/common/http'
import {catchError, map, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import {
  dictionariesActions,
  dictionariesFailureActions,
  dictionariesSuccessActions
} from '@app/shared/dictionary/dictionaries/actions/dictionaries.actions'

import {DictionaryService} from '@app/shared/dictionary/services/dictionary.service'

import {DictionariesInterface} from '@app/shared/dictionary/types/dictionaries-interface'

@Injectable()
export class DictionariesEffects {

  dictionary$ = createEffect(() => this.actions$.pipe(
                                ofType(dictionariesActions),
                                switchMap(() => {
                                  return this.dictionaryService.getDictionaries().pipe(
                                        map(([roles, specializations, qualifications, skills, countries]) => {
                                            const dictionaries: DictionariesInterface = {
                                                  roles: this.dictionaryService.addDictionary(roles),
                                                  specializations: this.dictionaryService.addDictionary(specializations),
                                                  qualifications: this.dictionaryService.addDictionary(qualifications),
                                                  skills: this.dictionaryService.addDictionary(skills),
                                                  countries: this.dictionaryService.addDictionary(countries)
                                            }
                                            return dictionariesSuccessActions({dictionaries})
                                        }),
                                        catchError((errorResponse: HttpErrorResponse) => {
                                          return of(dictionariesFailureActions({errors: errorResponse.error.errors}))
                                        })
                                  )
                                })
  ))


  constructor(private actions$: Actions,
              private dictionaryService: DictionaryService) {}

}
