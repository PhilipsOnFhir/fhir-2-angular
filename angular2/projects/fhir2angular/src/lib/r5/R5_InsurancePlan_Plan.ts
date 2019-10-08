import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_InsurancePlan_GeneralCost } from './R5_InsurancePlan_GeneralCost'
import { R5_InsurancePlan_SpecificCost } from './R5_InsurancePlan_SpecificCost'
import { R5_Reference } from './R5_Reference'

export class R5_InsurancePlan_Plan      extends R5_BackboneElement
{

   static def : string = 'InsurancePlan_Plan';
   identifier : R5_Identifier [];
   type : R5_CodeableConcept ;
   coverageArea : R5_Reference [];
   network : R5_Reference [];
   generalCost : R5_InsurancePlan_GeneralCost [];
   specificCost : R5_InsurancePlan_SpecificCost [];
}
