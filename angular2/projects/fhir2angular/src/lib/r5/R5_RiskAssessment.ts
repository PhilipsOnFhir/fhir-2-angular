import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ObservationStatusEnum } from './R5_ObservationStatusEnum'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RiskAssessment_Prediction } from './R5_RiskAssessment_Prediction'

export class R5_RiskAssessment      extends R5_DomainResource
{

   static def : string = 'RiskAssessment';
   identifier : R5_Identifier [];
   basedOn : R5_Reference ;
   parent : R5_Reference ;
   status : R5_ObservationStatusEnum ;
   method : R5_CodeableConcept ;
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   condition : R5_Reference ;
   performer : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   basis : R5_Reference [];
   prediction : R5_RiskAssessment_Prediction [];
   mitigation : string ;
   note : R5_Annotation [];
}
