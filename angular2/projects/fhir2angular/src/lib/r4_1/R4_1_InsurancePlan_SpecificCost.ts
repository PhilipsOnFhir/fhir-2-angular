import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_InsurancePlan_Benefit1 } from './R4_1_InsurancePlan_Benefit1'

export class R4_1_InsurancePlan_SpecificCost      extends R4_1_BackboneElement
{

   static def : string = 'InsurancePlan_SpecificCost';
   category : R4_1_CodeableConcept ;
   benefit : R4_1_InsurancePlan_Benefit1 [];
}
