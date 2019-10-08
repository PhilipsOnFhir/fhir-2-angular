import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_TaskIntentEnum } from './R4_1_TaskIntentEnum'
import { R4_1_TaskStatusEnum } from './R4_1_TaskStatusEnum'
import { R4_1_Task_Input } from './R4_1_Task_Input'
import { R4_1_Task_Output } from './R4_1_Task_Output'
import { R4_1_Task_Restriction } from './R4_1_Task_Restriction'

export class R4_1_Task      extends R4_1_DomainResource
{

   static def : string = 'Task';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string ;
   instantiatesUri : string ;
   basedOn : R4_1_Reference [];
   groupIdentifier : R4_1_Identifier ;
   partOf : R4_1_Reference [];
   status : R4_1_TaskStatusEnum ;
   statusReason : R4_1_CodeableConcept ;
   businessStatus : R4_1_CodeableConcept ;
   intent : R4_1_TaskIntentEnum ;
   priority : R4_1_RequestPriorityEnum ;
   code : R4_1_CodeableConcept ;
   description : string ;
   focus : R4_1_Reference ;
   for : R4_1_Reference ;
   encounter : R4_1_Reference ;
   executionPeriod : R4_1_Period ;
   authoredOn : string ;
   lastModified : string ;
   requester : R4_1_Reference ;
   performerType : R4_1_CodeableConcept [];
   owner : R4_1_Reference ;
   location : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept ;
   reasonReference : R4_1_Reference ;
   insurance : R4_1_Reference [];
   note : R4_1_Annotation [];
   relevantHistory : R4_1_Reference [];
   restriction : R4_1_Task_Restriction ;
   input : R4_1_Task_Input [];
   output : R4_1_Task_Output [];
}
