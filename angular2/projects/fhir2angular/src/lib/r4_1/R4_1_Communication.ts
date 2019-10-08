import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Communication_Payload } from './R4_1_Communication_Payload'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EventStatusEnum } from './R4_1_EventStatusEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'

export class R4_1_Communication      extends R4_1_DomainResource
{

   static def : string = 'Communication';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_1_Reference [];
   partOf : R4_1_Reference [];
   inResponseTo : R4_1_Reference [];
   status : R4_1_EventStatusEnum ;
   statusReason : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   priority : R4_1_RequestPriorityEnum ;
   medium : R4_1_CodeableConcept [];
   subject : R4_1_Reference ;
   topic : R4_1_CodeableConcept ;
   about : R4_1_Reference [];
   encounter : R4_1_Reference ;
   sent : string ;
   received : string ;
   recipient : R4_1_Reference [];
   sender : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   payload : R4_1_Communication_Payload [];
   note : R4_1_Annotation [];
}
