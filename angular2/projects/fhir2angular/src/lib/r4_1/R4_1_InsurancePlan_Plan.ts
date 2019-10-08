import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_InsurancePlan_GeneralCost } from './R4_1_InsurancePlan_GeneralCost'
import { R4_1_InsurancePlan_SpecificCost } from './R4_1_InsurancePlan_SpecificCost'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_InsurancePlan_Plan      extends R4_1_BackboneElement
{

   static def : string = 'InsurancePlan_Plan';
   identifier : R4_1_Identifier [];
   type : R4_1_CodeableConcept ;
   coverageArea : R4_1_Reference [];
   network : R4_1_Reference [];
   generalCost : R4_1_InsurancePlan_GeneralCost [];
   specificCost : R4_1_InsurancePlan_SpecificCost [];
}
