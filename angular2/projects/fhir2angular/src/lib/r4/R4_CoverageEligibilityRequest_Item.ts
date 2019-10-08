import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_CoverageEligibilityRequest_Diagnosis } from './R4_CoverageEligibilityRequest_Diagnosis'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Money } from './R4_Money'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_CoverageEligibilityRequest_Item      extends R4_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_Item';
   supportingInfoSequence : string [];
   category : R4_CodeableConcept ;
   productOrService : R4_CodeableConcept ;
   modifier : R4_CodeableConcept [];
   provider : R4_Reference ;
   quantity : R4_Quantity ;
   unitPrice : R4_Money ;
   facility : R4_Reference ;
   diagnosis : R4_CoverageEligibilityRequest_Diagnosis [];
   detail : R4_Reference [];
}
