import { STU3_AdverseEventCausalityEnum } from './STU3_AdverseEventCausalityEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_AdverseEvent_SuspectEntity      extends STU3_BackboneElement
{

   static def : string = 'AdverseEvent_SuspectEntity';
   instance : STU3_Reference ;
   causality : STU3_AdverseEventCausalityEnum ;
   causalityAssessment : STU3_CodeableConcept ;
   causalityProductRelatedness : string ;
   causalityMethod : STU3_CodeableConcept ;
   causalityAuthor : STU3_Reference ;
   causalityResult : STU3_CodeableConcept ;
}
