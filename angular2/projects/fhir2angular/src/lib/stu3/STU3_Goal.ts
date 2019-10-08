import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GoalStatusEnum } from './STU3_GoalStatusEnum'
import { STU3_Goal_Target } from './STU3_Goal_Target'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Goal      extends STU3_DomainResource
{

   static def : string = 'Goal';
   identifier : STU3_Identifier [];
   status : STU3_GoalStatusEnum ;
   category : STU3_CodeableConcept [];
   priority : STU3_CodeableConcept ;
   description : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   startDate : string ;
   startCodeableConcept : STU3_CodeableConcept ;
   target : STU3_Goal_Target ;
   statusDate : string ;
   statusReason : string ;
   expressedBy : STU3_Reference ;
   addresses : STU3_Reference [];
   note : STU3_Annotation [];
   outcomeCode : STU3_CodeableConcept [];
   outcomeReference : STU3_Reference [];
}
