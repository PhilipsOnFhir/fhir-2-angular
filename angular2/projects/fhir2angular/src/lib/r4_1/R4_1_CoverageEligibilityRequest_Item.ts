import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_CoverageEligibilityRequest_Diagnosis } from './R4_1_CoverageEligibilityRequest_Diagnosis'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CoverageEligibilityRequest_Item      extends R4_1_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_Item';
   supportingInfoSequence : string [];
   category : R4_1_CodeableConcept ;
   productOrService : R4_1_CodeableConcept ;
   modifier : R4_1_CodeableConcept [];
   provider : R4_1_Reference ;
   quantity : R4_1_Quantity ;
   unitPrice : R4_1_Money ;
   facility : R4_1_Reference ;
   diagnosis : R4_1_CoverageEligibilityRequest_Diagnosis [];
   detail : R4_1_Reference [];
}
