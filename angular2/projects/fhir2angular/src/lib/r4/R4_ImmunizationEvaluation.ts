import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ImmunizationEvaluationStatusCodesEnum } from './R4_ImmunizationEvaluationStatusCodesEnum'
import { R4_Reference } from './R4_Reference'

export class R4_ImmunizationEvaluation      extends R4_DomainResource
{

   static def : string = 'ImmunizationEvaluation';
   identifier : R4_Identifier [];
   status : R4_ImmunizationEvaluationStatusCodesEnum ;
   patient : R4_Reference ;
   date : string ;
   authority : R4_Reference ;
   targetDisease : R4_CodeableConcept ;
   immunizationEvent : R4_Reference ;
   doseStatus : R4_CodeableConcept ;
   doseStatusReason : R4_CodeableConcept [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
}
