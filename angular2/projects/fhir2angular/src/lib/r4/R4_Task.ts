import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_TaskIntentEnum } from './R4_TaskIntentEnum'
import { R4_TaskStatusEnum } from './R4_TaskStatusEnum'
import { R4_Task_Input } from './R4_Task_Input'
import { R4_Task_Output } from './R4_Task_Output'
import { R4_Task_Restriction } from './R4_Task_Restriction'

export class R4_Task      extends R4_DomainResource
{

   static def : string = 'Task';
   identifier : R4_Identifier [];
   instantiatesCanonical : string ;
   instantiatesUri : string ;
   basedOn : R4_Reference [];
   groupIdentifier : R4_Identifier ;
   partOf : R4_Reference [];
   status : R4_TaskStatusEnum ;
   statusReason : R4_CodeableConcept ;
   businessStatus : R4_CodeableConcept ;
   intent : R4_TaskIntentEnum ;
   priority : R4_RequestPriorityEnum ;
   code : R4_CodeableConcept ;
   description : string ;
   focus : R4_Reference ;
   for : R4_Reference ;
   encounter : R4_Reference ;
   executionPeriod : R4_Period ;
   authoredOn : string ;
   lastModified : string ;
   requester : R4_Reference ;
   performerType : R4_CodeableConcept [];
   owner : R4_Reference ;
   location : R4_Reference ;
   reasonCode : R4_CodeableConcept ;
   reasonReference : R4_Reference ;
   insurance : R4_Reference [];
   note : R4_Annotation [];
   relevantHistory : R4_Reference [];
   restriction : R4_Task_Restriction ;
   input : R4_Task_Input [];
   output : R4_Task_Output [];
}
