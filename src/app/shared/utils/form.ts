import {ControlEntitiesInterface} from '@app/shared/types/frontend/types/control-entities-interface';

export const markFormGroupTouched = (formGroup) => {
  (Object as any).values(formGroup.controls).forEach(control => {
    control.markAllAsTouched()

    if (control.controls) {
      markFormGroupTouched(control)
    }
  })
}

export const mapControls = (controls: ControlEntitiesInterface): void => {
  Object.keys(controls).forEach(key => {
    if (controls[key].map) {

      console.log(controls[key])
      controls[key].map()
    }
  })
}
