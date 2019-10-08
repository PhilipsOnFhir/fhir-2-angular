import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RequestIntentEnum } from './STU3_RequestIntentEnum'
import { STU3_RequestPriorityEnum } from './STU3_RequestPriorityEnum'
import { STU3_TaskStatusEnum } from './STU3_TaskStatusEnum'
import { STU3_Task_Input } from './STU3_Task_Input'
import { STU3_Task_Output } from './STU3_Task_Output'
import { STU3_Task_Requester } from './STU3_Task_Requester'
import { STU3_Task_Restriction } from './STU3_Task_Restriction'

export class STU3_Task      extends STU3_DomainResource
{

   static def : string = 'Task';
   identifier : STU3_Identifier [];
   definitionUri : string ;
   definitionReference : STU3_Reference ;
   basedOn : STU3_Reference [];
   groupIdentifier : STU3_Identifier ;
   partOf : STU3_Reference [];
   status : STU3_TaskStatusEnum ;
   statusReason : STU3_CodeableConcept ;
   businessStatus : STU3_CodeableConcept ;
   intent : STU3_RequestIntentEnum ;
   priority : STU3_RequestPriorityEnum ;
   code : STU3_CodeableConcept ;
   description : string ;
   focus : STU3_Reference ;
   for : STU3_Reference ;
   context : STU3_Reference ;
   executionPeriod : STU3_Period ;
   authoredOn : string ;
   lastModified : string ;
   requester : STU3_Task_Requester ;
   performerType : STU3_CodeableConcept [];
   owner : STU3_Reference ;
   reason : STU3_CodeableConcept ;
   note : STU3_Annotation [];
   relevantHistory : STU3_Reference [];
   restriction : STU3_Task_Restriction ;
   input : STU3_Task_Input [];
   output : STU3_Task_Output [];
}
