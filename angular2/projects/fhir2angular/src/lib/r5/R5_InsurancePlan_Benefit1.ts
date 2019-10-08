import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_InsurancePlan_Cost } from './R5_InsurancePlan_Cost'

export class R5_InsurancePlan_Benefit1      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_Benefit1';
   type : R5_CodeableConcept ;
   cost : R5_InsurancePlan_Cost [];
}
