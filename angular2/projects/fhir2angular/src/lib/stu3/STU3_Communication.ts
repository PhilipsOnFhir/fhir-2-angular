import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Communication_Payload } from './STU3_Communication_Payload'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EventStatusEnum } from './STU3_EventStatusEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Communication      extends STU3_DomainResource
{

   static def : string = 'Communication';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   partOf : STU3_Reference [];
   status : STU3_EventStatusEnum ;
   notDone : boolean ;
   notDoneReason : STU3_CodeableConcept ;
   category : STU3_CodeableConcept [];
   medium : STU3_CodeableConcept [];
   subject : STU3_Reference ;
   recipient : STU3_Reference [];
   topic : STU3_Reference [];
   context : STU3_Reference ;
   sent : string ;
   received : string ;
   sender : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   payload : STU3_Communication_Payload [];
   note : STU3_Annotation [];
}
