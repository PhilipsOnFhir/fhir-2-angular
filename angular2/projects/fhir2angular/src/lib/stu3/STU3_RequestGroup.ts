import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RequestGroup_Action } from './STU3_RequestGroup_Action'
import { STU3_RequestIntentEnum } from './STU3_RequestIntentEnum'
import { STU3_RequestPriorityEnum } from './STU3_RequestPriorityEnum'
import { STU3_RequestStatusEnum } from './STU3_RequestStatusEnum'

export class STU3_RequestGroup      extends STU3_DomainResource
{

   static def : string = 'RequestGroup';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   replaces : STU3_Reference [];
   groupIdentifier : STU3_Identifier ;
   status : STU3_RequestStatusEnum ;
   intent : STU3_RequestIntentEnum ;
   priority : STU3_RequestPriorityEnum ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   authoredOn : string ;
   author : STU3_Reference ;
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   note : STU3_Annotation [];
   action : STU3_RequestGroup_Action [];
}
