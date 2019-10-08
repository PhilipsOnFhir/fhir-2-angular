import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GoalLifecycleStatusEnum } from './R4_1_GoalLifecycleStatusEnum'
import { R4_1_Goal_Target } from './R4_1_Goal_Target'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Goal      extends R4_1_DomainResource
{

   static def : string = 'Goal';
   identifier : R4_1_Identifier [];
   lifecycleStatus : R4_1_GoalLifecycleStatusEnum ;
   achievementStatus : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   priority : R4_1_CodeableConcept ;
   description : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   startDate : string ;
   startCodeableConcept : R4_1_CodeableConcept ;
   target : R4_1_Goal_Target [];
   statusDate : string ;
   statusReason : string ;
   expressedBy : R4_1_Reference ;
   addresses : R4_1_Reference [];
   note : R4_1_Annotation [];
   outcomeCode : R4_1_CodeableConcept [];
   outcomeReference : R4_1_Reference [];
}
