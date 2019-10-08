import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Communication_Payload } from './R5_Communication_Payload'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EventStatusEnum } from './R5_EventStatusEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'

export class R5_Communication      extends R5_DomainResource
{

   static def : string = 'Communication';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R5_Reference [];
   partOf : R5_Reference [];
   inResponseTo : R5_Reference [];
   status : R5_EventStatusEnum ;
   statusReason : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   priority : R5_RequestPriorityEnum ;
   medium : R5_CodeableConcept [];
   subject : R5_Reference ;
   topic : R5_CodeableConcept ;
   about : R5_Reference [];
   encounter : R5_Reference ;
   sent : string ;
   received : string ;
   recipient : R5_Reference [];
   sender : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   payload : R5_Communication_Payload [];
   note : R5_Annotation [];
}
