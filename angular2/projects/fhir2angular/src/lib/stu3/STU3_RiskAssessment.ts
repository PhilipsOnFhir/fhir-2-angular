import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ObservationStatusEnum } from './STU3_ObservationStatusEnum'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RiskAssessment_Prediction } from './STU3_RiskAssessment_Prediction'

export class STU3_RiskAssessment      extends STU3_DomainResource
{

   static def : string = 'RiskAssessment';
   identifier : STU3_Identifier ;
   basedOn : STU3_Reference ;
   parent : STU3_Reference ;
   status : STU3_ObservationStatusEnum ;
   method : STU3_CodeableConcept ;
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   condition : STU3_Reference ;
   performer : STU3_Reference ;
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   basis : STU3_Reference [];
   prediction : STU3_RiskAssessment_Prediction [];
   mitigation : string ;
   comment : string ;
}
