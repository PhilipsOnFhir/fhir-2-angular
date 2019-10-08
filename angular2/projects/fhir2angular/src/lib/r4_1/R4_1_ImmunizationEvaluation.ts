import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ImmunizationEvaluationStatusCodesEnum } from './R4_1_ImmunizationEvaluationStatusCodesEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImmunizationEvaluation      extends R4_1_DomainResource
{

   static def : string = 'ImmunizationEvaluation';
   identifier : R4_1_Identifier [];
   status : R4_1_ImmunizationEvaluationStatusCodesEnum ;
   patient : R4_1_Reference ;
   date : string ;
   authority : R4_1_Reference ;
   targetDisease : R4_1_CodeableConcept ;
   immunizationEvent : R4_1_Reference ;
   doseStatus : R4_1_CodeableConcept ;
   doseStatusReason : R4_1_CodeableConcept [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
}
