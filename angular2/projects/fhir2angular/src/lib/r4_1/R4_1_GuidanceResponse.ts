import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DataRequirement } from './R4_1_DataRequirement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GuidanceResponseStatusEnum } from './R4_1_GuidanceResponseStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_GuidanceResponse      extends R4_1_DomainResource
{

   static def : string = 'GuidanceResponse';
   requestIdentifier : R4_1_Identifier ;
   identifier : R4_1_Identifier [];
   moduleUri : string ;
   moduleCanonical : string ;
   moduleCodeableConcept : R4_1_CodeableConcept ;
   status : R4_1_GuidanceResponseStatusEnum ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   occurrenceDateTime : string ;
   performer : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   note : R4_1_Annotation [];
   evaluationMessage : R4_1_Reference [];
   outputParameters : R4_1_Reference ;
   result : R4_1_Reference ;
   dataRequirement : R4_1_DataRequirement [];
}
