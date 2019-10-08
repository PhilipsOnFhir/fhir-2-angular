import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_InsurancePlan_Cost      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_Cost';
   type : R5_CodeableConcept ;
   applicability : R5_CodeableConcept ;
   qualifiers : R5_CodeableConcept [];
   value : R5_Quantity ;
}
