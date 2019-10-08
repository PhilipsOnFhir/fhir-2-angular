import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GuidanceResponseStatusEnum } from './R4_GuidanceResponseStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_GuidanceResponse      extends R4_DomainResource
{

   static def : string = 'GuidanceResponse';
   requestIdentifier : R4_Identifier ;
   identifier : R4_Identifier [];
   moduleUri : string ;
   moduleCanonical : string ;
   moduleCodeableConcept : R4_CodeableConcept ;
   status : R4_GuidanceResponseStatusEnum ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   occurrenceDateTime : string ;
   performer : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   note : R4_Annotation [];
   evaluationMessage : R4_Reference [];
   outputParameters : R4_Reference ;
   result : R4_Reference ;
   dataRequirement : R4_DataRequirement [];
}
