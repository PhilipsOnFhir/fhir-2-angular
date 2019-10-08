import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_TaskIntentEnum } from './R5_TaskIntentEnum'
import { R5_TaskStatusEnum } from './R5_TaskStatusEnum'
import { R5_Task_Input } from './R5_Task_Input'
import { R5_Task_Output } from './R5_Task_Output'
import { R5_Task_Restriction } from './R5_Task_Restriction'

export class R5_Task      extends R5_DomainResource
{

   static def : string = 'Task';
   identifier : R5_Identifier [];
   instantiatesCanonical : string ;
   instantiatesUri : string ;
   basedOn : R5_Reference [];
   groupIdentifier : R5_Identifier ;
   partOf : R5_Reference [];
   status : R5_TaskStatusEnum ;
   statusReason : R5_CodeableConcept ;
   businessStatus : R5_CodeableConcept ;
   intent : R5_TaskIntentEnum ;
   priority : R5_RequestPriorityEnum ;
   code : R5_CodeableConcept ;
   description : string ;
   focus : R5_Reference ;
   for : R5_Reference ;
   encounter : R5_Reference ;
   executionPeriod : R5_Period ;
   authoredOn : string ;
   lastModified : string ;
   requester : R5_Reference ;
   performerType : R5_CodeableConcept [];
   owner : R5_Reference ;
   location : R5_Reference ;
   reasonCode : R5_CodeableConcept ;
   reasonReference : R5_Reference ;
   insurance : R5_Reference [];
   note : R5_Annotation [];
   relevantHistory : R5_Reference [];
   restriction : R5_Task_Restriction ;
   input : R5_Task_Input [];
   output : R5_Task_Output [];
}
