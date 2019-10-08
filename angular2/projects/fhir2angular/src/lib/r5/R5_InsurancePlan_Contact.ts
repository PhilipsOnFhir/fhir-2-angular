import { R5_Address } from './R5_Address'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HumanName } from './R5_HumanName'

export class R5_InsurancePlan_Contact      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_Contact';
   purpose : R5_CodeableConcept ;
   name : R5_HumanName ;
   telecom : R5_ContactPoint [];
   address : R5_Address ;
}
