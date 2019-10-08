import { STU3_Address } from './STU3_Address'
import { STU3_AdministrativeGenderEnum } from './STU3_AdministrativeGenderEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HumanName } from './STU3_HumanName'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Patient_Contact      extends STU3_BackboneElement
{

   static def : string = 'Patient_Contact';
   relationship : STU3_CodeableConcept [];
   name : STU3_HumanName ;
   telecom : STU3_ContactPoint [];
   address : STU3_Address ;
   gender : STU3_AdministrativeGenderEnum ;
   organization : STU3_Reference ;
   period : STU3_Period ;
}
