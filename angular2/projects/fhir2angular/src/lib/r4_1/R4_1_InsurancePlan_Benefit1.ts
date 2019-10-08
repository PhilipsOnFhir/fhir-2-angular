import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_InsurancePlan_Cost } from './R4_1_InsurancePlan_Cost'

export class R4_1_InsurancePlan_Benefit1      extends R4_1_BackboneElement
{

   static def : string = 'InsurancePlan_Benefit1';
   type : R4_1_CodeableConcept ;
   cost : R4_1_InsurancePlan_Cost [];
}
