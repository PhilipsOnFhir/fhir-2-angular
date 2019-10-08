import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GoalLifecycleStatusEnum } from './R5_GoalLifecycleStatusEnum'
import { R5_Goal_Target } from './R5_Goal_Target'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Goal      extends R5_DomainResource
{

   static def : string = 'Goal';
   identifier : R5_Identifier [];
   lifecycleStatus : R5_GoalLifecycleStatusEnum ;
   achievementStatus : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   priority : R5_CodeableConcept ;
   description : R5_CodeableConcept ;
   subject : R5_Reference ;
   startDate : string ;
   startCodeableConcept : R5_CodeableConcept ;
   target : R5_Goal_Target [];
   statusDate : string ;
   statusReason : string ;
   expressedBy : R5_Reference ;
   addresses : R5_Reference [];
   note : R5_Annotation [];
   outcomeCode : R5_CodeableConcept [];
   outcomeReference : R5_Reference [];
}
