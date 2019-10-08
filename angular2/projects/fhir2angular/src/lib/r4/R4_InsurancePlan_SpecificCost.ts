import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_InsurancePlan_Benefit1 } from './R4_InsurancePlan_Benefit1'

export class R4_InsurancePlan_SpecificCost      extends R4_BackboneElement
{

   static def : string = 'InsurancePlan_SpecificCost';
   category : R4_CodeableConcept ;
   benefit : R4_InsurancePlan_Benefit1 [];
}
