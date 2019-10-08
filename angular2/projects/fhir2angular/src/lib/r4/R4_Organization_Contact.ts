import { R4_Address } from './R4_Address'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HumanName } from './R4_HumanName'

export class R4_Organization_Contact      extends R4_BackboneElement
{

   static def : string = 'Organization_Contact';
   purpose : R4_CodeableConcept ;
   name : R4_HumanName ;
   telecom : R4_ContactPoint [];
   address : R4_Address ;
}
