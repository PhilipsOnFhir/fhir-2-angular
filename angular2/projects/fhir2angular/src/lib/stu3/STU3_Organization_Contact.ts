import { STU3_Address } from './STU3_Address'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HumanName } from './STU3_HumanName'

export class STU3_Organization_Contact      extends STU3_BackboneElement
{

   static def : string = 'Organization_Contact';
   purpose : STU3_CodeableConcept ;
   name : STU3_HumanName ;
   telecom : STU3_ContactPoint [];
   address : STU3_Address ;
}
