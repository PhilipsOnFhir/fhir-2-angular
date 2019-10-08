import { R4_Address } from './R4_Address'
import { R4_AdministrativeGenderEnum } from './R4_AdministrativeGenderEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HumanName } from './R4_HumanName'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Patient_Contact      extends R4_BackboneElement
{

   static def : string = 'Patient_Contact';
   relationship : R4_CodeableConcept [];
   name : R4_HumanName ;
   telecom : R4_ContactPoint [];
   address : R4_Address ;
   gender : R4_AdministrativeGenderEnum ;
   organization : R4_Reference ;
   period : R4_Period ;
}
