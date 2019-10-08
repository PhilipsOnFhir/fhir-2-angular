import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DataRequirement } from './STU3_DataRequirement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GuidanceResponseStatusEnum } from './STU3_GuidanceResponseStatusEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_GuidanceResponse      extends STU3_DomainResource
{

   static def : string = 'GuidanceResponse';
   requestId : string ;
   identifier : STU3_Identifier ;
   module : STU3_Reference ;
   status : STU3_GuidanceResponseStatusEnum ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   performer : STU3_Reference ;
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   note : STU3_Annotation [];
   evaluationMessage : STU3_Reference [];
   outputParameters : STU3_Reference ;
   result : STU3_Reference ;
   dataRequirement : STU3_DataRequirement [];
}
