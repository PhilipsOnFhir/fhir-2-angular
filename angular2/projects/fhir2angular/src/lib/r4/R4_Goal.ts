import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GoalLifecycleStatusEnum } from './R4_GoalLifecycleStatusEnum'
import { R4_Goal_Target } from './R4_Goal_Target'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Goal      extends R4_DomainResource
{

   static def : string = 'Goal';
   identifier : R4_Identifier [];
   lifecycleStatus : R4_GoalLifecycleStatusEnum ;
   achievementStatus : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   priority : R4_CodeableConcept ;
   description : R4_CodeableConcept ;
   subject : R4_Reference ;
   startDate : string ;
   startCodeableConcept : R4_CodeableConcept ;
   target : R4_Goal_Target [];
   statusDate : string ;
   statusReason : string ;
   expressedBy : R4_Reference ;
   addresses : R4_Reference [];
   note : R4_Annotation [];
   outcomeCode : R4_CodeableConcept [];
   outcomeReference : R4_Reference [];
}
