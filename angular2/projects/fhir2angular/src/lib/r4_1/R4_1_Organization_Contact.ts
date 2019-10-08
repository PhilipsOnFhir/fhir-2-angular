import { R4_1_Address } from './R4_1_Address'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HumanName } from './R4_1_HumanName'

export class R4_1_Organization_Contact      extends R4_1_BackboneElement
{

   static def : string = 'Organization_Contact';
   purpose : R4_1_CodeableConcept ;
   name : R4_1_HumanName ;
   telecom : R4_1_ContactPoint [];
   address : R4_1_Address ;
}
