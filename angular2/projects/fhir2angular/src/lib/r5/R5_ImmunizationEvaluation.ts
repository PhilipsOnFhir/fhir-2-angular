import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ImmunizationEvaluationStatusCodesEnum } from './R5_ImmunizationEvaluationStatusCodesEnum'
import { R5_Reference } from './R5_Reference'

export class R5_ImmunizationEvaluation      extends R5_DomainResource
{

   static def : string = 'ImmunizationEvaluation';
   identifier : R5_Identifier [];
   status : R5_ImmunizationEvaluationStatusCodesEnum ;
   patient : R5_Reference ;
   date : string ;
   authority : R5_Reference ;
   targetDisease : R5_CodeableConcept ;
   immunizationEvent : R5_Reference ;
   doseStatus : R5_CodeableConcept ;
   doseStatusReason : R5_CodeableConcept [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
}
