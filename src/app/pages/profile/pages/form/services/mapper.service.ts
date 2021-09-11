import {Injectable} from '@angular/core';
import {UserInterface} from '@app/shared/types/backend/types/user-interface';
import {ProfileFormInterface} from '@app/pages/profile/pages/form/types/profile-form-interface';
import {DictionariesInterface} from '@app/shared/dictionary/types/dictionaries-interface';
import {EmployeeFormInterface} from '@app/pages/profile/pages/form/types/employee-form-interface';
import {RecruiterFormInterface} from '@app/pages/profile/pages/form/types/recruiter-form-interface';
import {EmployeeInterface} from '@app/shared/types/backend/types/employee-interface';
import {RecruiterInterface} from '@app/shared/types/backend/types/recruiter-interface';


@Injectable()
export class MapperService {

  constructor() {}

  userToForm(user: UserInterface): ProfileFormInterface {
     return {
       personal: {
         name: user ? user.name : null,
         photoURL: user ? user.photoURL : null,
         country: user ? user.country : null
       },
       professional: {
         about: user ? user.about : null,
         roleId: user ? user.roleId : null,
         role: user ? this.getFormRole(user) : null
       }
     }
  }

  formToUserCreate(form: ProfileFormInterface, dictionaries: DictionariesInterface): any {
     return {
       name: form.personal.name,
       photoURL: form.personal.photoURL,
       roleId: form.professional.roleId,
       country: form.personal.country,
       about: form.professional.about,
       role: this.getRole(form, dictionaries)
     }
  }

  formToUserUpdate(form: ProfileFormInterface, user: UserInterface ,dictionaries: DictionariesInterface): any {
    return {
      uid: user.uid,
      email: user.email,
      created: user.created,
      name: form.personal.name,
      photoURL: form.personal.photoURL,
      roleId: form.professional.roleId,
      country: form.personal.country,
      about: form.professional.about,
      role: this.getRole(form, dictionaries),
    }
  }

  private getFormRole(user: UserInterface): EmployeeFormInterface | RecruiterFormInterface {
     if (user.roleId === 'employee') {
         const role = user.role as EmployeeInterface

         const formRole: EmployeeFormInterface = {
            expectedSalary: role.expectedSalary,
            specialization: role.specialization.id,
            qualification: role.qualification.id,
            skills: role.skills.map(s => s.id),
            experiences: role.experiences
         }

       return formRole
     }

     if (user.roleId === 'recruiter') {
        const role = user.role as RecruiterInterface

       const formRole: RecruiterFormInterface = {
         companyName: role.companyName,
         employeesCount: role.employeesCount
       }

       return formRole
     }
  }

  private getRole(form: ProfileFormInterface, dictionaries: DictionariesInterface): EmployeeFormInterface | RecruiterInterface {
    if (form.professional.roleId === 'employee') {
      const formRole = form.professional.role as EmployeeFormInterface

      const role: EmployeeInterface = {
        expectedSalary: formRole.expectedSalary,
        specialization: dictionaries.specializations.items.find(s => s.id === formRole.specialization),
        qualification: dictionaries.qualifications.items.find(s => s.id === formRole.qualification),
        skills: formRole.skills.map(id => dictionaries.skills.items.find(s => s.id === id)),
        experiences: formRole.experiences
      }

      return formRole
    }

    if (form.professional.roleId === 'recruiter') {
      const formRole = form.professional.role as RecruiterInterface

      const role: RecruiterFormInterface = {
        companyName: formRole.companyName,
        employeesCount: formRole.employeesCount
      }

      return role
    }
  }
}
