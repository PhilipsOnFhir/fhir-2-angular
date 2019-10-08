import { R5_Address } from './R5_Address'
import { R5_AdministrativeGenderEnum } from './R5_AdministrativeGenderEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HumanName } from './R5_HumanName'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Patient_Contact      extends R5_BackboneElement
{

   static def : string = 'Patient_Contact';
   relationship : R5_CodeableConcept [];
   name : R5_HumanName ;
   telecom : R5_ContactPoint [];
   address : R5_Address ;
   gender : R5_AdministrativeGenderEnum ;
   organization : R5_Reference ;
   period : R5_Period ;
}
