import { R4_1_Address } from './R4_1_Address'
import { R4_1_AdministrativeGenderEnum } from './R4_1_AdministrativeGenderEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Patient_Contact      extends R4_1_BackboneElement
{

   static def : string = 'Patient_Contact';
   relationship : R4_1_CodeableConcept [];
   name : R4_1_HumanName ;
   telecom : R4_1_ContactPoint [];
   address : R4_1_Address ;
   gender : R4_1_AdministrativeGenderEnum ;
   organization : R4_1_Reference ;
   period : R4_1_Period ;
}
