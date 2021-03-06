import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestIntentEnum } from './RequestIntentEnum'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { TaskStatusEnum } from './TaskStatusEnum'
import { Task_Input } from './Task_Input'
import { Task_Output } from './Task_Output'
import { Task_Requester } from './Task_Requester'
import { Task_Restriction } from './Task_Restriction'

export class Task      extends DomainResource
{

   static def : string = 'Task';
   identifier : Identifier [];
   definitionUri : string ;
   definitionReference : Reference ;
   basedOn : Reference [];
   groupIdentifier : Identifier ;
   partOf : Reference [];
   status : TaskStatusEnum ;
   statusReason : CodeableConcept ;
   businessStatus : CodeableConcept ;
   intent : RequestIntentEnum ;
   priority : RequestPriorityEnum ;
   code : CodeableConcept ;
   description : string ;
   focus : Reference ;
   for : Reference ;
   context : Reference ;
   executionPeriod : Period ;
   authoredOn : string ;
   lastModified : string ;
   requester : Task_Requester ;
   performerType : CodeableConcept [];
   owner : Reference ;
   reason : CodeableConcept ;
   note : Annotation [];
   relevantHistory : Reference [];
   restriction : Task_Restriction ;
   input : Task_Input [];
   output : Task_Output [];
}
