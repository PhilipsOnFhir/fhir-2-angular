import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GuidanceResponseStatusEnum } from './R5_GuidanceResponseStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_GuidanceResponse      extends R5_DomainResource
{

   static def : string = 'GuidanceResponse';
   requestIdentifier : R5_Identifier ;
   identifier : R5_Identifier [];
   moduleUri : string ;
   moduleCanonical : string ;
   moduleCodeableConcept : R5_CodeableConcept ;
   status : R5_GuidanceResponseStatusEnum ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   occurrenceDateTime : string ;
   performer : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   note : R5_Annotation [];
   evaluationMessage : R5_Reference [];
   outputParameters : R5_Reference ;
   result : R5_Reference ;
   dataRequirement : R5_DataRequirement [];
}
