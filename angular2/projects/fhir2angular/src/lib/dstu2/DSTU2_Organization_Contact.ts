import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_HumanName } from './DSTU2_HumanName'

export class DSTU2_Organization_Contact      extends DSTU2_BackboneElement
{

   static def : string = 'Organization_Contact';
   purpose : DSTU2_CodeableConcept ;
   name : DSTU2_HumanName ;
   telecom : DSTU2_ContactPoint [];
   address : DSTU2_Address ;
}
