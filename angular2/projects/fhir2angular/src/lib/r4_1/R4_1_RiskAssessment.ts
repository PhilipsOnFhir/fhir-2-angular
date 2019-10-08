import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ObservationStatusEnum } from './R4_1_ObservationStatusEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RiskAssessment_Prediction } from './R4_1_RiskAssessment_Prediction'

export class R4_1_RiskAssessment      extends R4_1_DomainResource
{

   static def : string = 'RiskAssessment';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference ;
   parent : R4_1_Reference ;
   status : R4_1_ObservationStatusEnum ;
   method : R4_1_CodeableConcept ;
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   condition : R4_1_Reference ;
   performer : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   basis : R4_1_Reference [];
   prediction : R4_1_RiskAssessment_Prediction [];
   mitigation : string ;
   note : R4_1_Annotation [];
}
