import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ObservationStatusEnum } from './R4_ObservationStatusEnum'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RiskAssessment_Prediction } from './R4_RiskAssessment_Prediction'

export class R4_RiskAssessment      extends R4_DomainResource
{

   static def : string = 'RiskAssessment';
   identifier : R4_Identifier [];
   basedOn : R4_Reference ;
   parent : R4_Reference ;
   status : R4_ObservationStatusEnum ;
   method : R4_CodeableConcept ;
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   condition : R4_Reference ;
   performer : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   basis : R4_Reference [];
   prediction : R4_RiskAssessment_Prediction [];
   mitigation : string ;
   note : R4_Annotation [];
}
