import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_InsurancePlan_Benefit1 } from './R5_InsurancePlan_Benefit1'

export class R5_InsurancePlan_SpecificCost      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_SpecificCost';
   category : R5_CodeableConcept ;
   benefit : R5_InsurancePlan_Benefit1 [];
}
