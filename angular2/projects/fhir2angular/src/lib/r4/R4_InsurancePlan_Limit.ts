import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_InsurancePlan_Limit      extends R4_BackboneElement
{

   static def : string = 'InsurancePlan_Limit';
   value : R4_Quantity ;
   code : R4_CodeableConcept ;
}
