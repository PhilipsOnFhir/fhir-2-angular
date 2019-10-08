import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_CoverageEligibilityRequest_Diagnosis } from './R5_CoverageEligibilityRequest_Diagnosis'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_CoverageEligibilityRequest_Item      extends R5_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_Item';
   supportingInfoSequence : string [];
   category : R5_CodeableConcept ;
   productOrService : R5_CodeableConcept ;
   modifier : R5_CodeableConcept [];
   provider : R5_Reference ;
   quantity : R5_Quantity ;
   unitPrice : R5_Money ;
   facility : R5_Reference ;
   diagnosis : R5_CoverageEligibilityRequest_Diagnosis [];
   detail : R5_Reference [];
}
