import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_InsurancePlan_GeneralCost } from './R4_InsurancePlan_GeneralCost'
import { R4_InsurancePlan_SpecificCost } from './R4_InsurancePlan_SpecificCost'
import { R4_Reference } from './R4_Reference'

export class R4_InsurancePlan_Plan      extends R4_BackboneElement
{

   static def : string = 'InsurancePlan_Plan';
   identifier : R4_Identifier [];
   type : R4_CodeableConcept ;
   coverageArea : R4_Reference [];
   network : R4_Reference [];
   generalCost : R4_InsurancePlan_GeneralCost [];
   specificCost : R4_InsurancePlan_SpecificCost [];
}
