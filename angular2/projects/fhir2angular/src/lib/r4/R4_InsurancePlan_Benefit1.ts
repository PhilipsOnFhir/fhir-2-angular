import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_InsurancePlan_Cost } from './R4_InsurancePlan_Cost'

export class R4_InsurancePlan_Benefit1      extends R4_BackboneElement
{

   static def : string = 'InsurancePlan_Benefit1';
   type : R4_CodeableConcept ;
   cost : R4_InsurancePlan_Cost [];
}
