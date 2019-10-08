import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Communication_Payload } from './R4_Communication_Payload'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EventStatusEnum } from './R4_EventStatusEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'

export class R4_Communication      extends R4_DomainResource
{

   static def : string = 'Communication';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_Reference [];
   partOf : R4_Reference [];
   inResponseTo : R4_Reference [];
   status : R4_EventStatusEnum ;
   statusReason : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   priority : R4_RequestPriorityEnum ;
   medium : R4_CodeableConcept [];
   subject : R4_Reference ;
   topic : R4_CodeableConcept ;
   about : R4_Reference [];
   encounter : R4_Reference ;
   sent : string ;
   received : string ;
   recipient : R4_Reference [];
   sender : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   payload : R4_Communication_Payload [];
   note : R4_Annotation [];
}
