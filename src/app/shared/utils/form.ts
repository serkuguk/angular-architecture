export const markFormGroupTouched = (formGroup) => {
  (Object as any).values(formGroup.controls).forEach(control => {
    control.markAllAsTouched()

    if (control.controls) {
      markFormGroupTouched(control)
    }
  })
}
