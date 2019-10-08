import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_RequestGroup_Action } from './R5_RequestGroup_Action'
import { R5_RequestIntentEnum } from './R5_RequestIntentEnum'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_RequestStatusEnum } from './R5_RequestStatusEnum'

export class R5_RequestGroup      extends R5_DomainResource
{

   static def : string = 'RequestGroup';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R5_Reference [];
   replaces : R5_Reference [];
   groupIdentifier : R5_Identifier ;
   status : R5_RequestStatusEnum ;
   intent : R5_RequestIntentEnum ;
   priority : R5_RequestPriorityEnum ;
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   authoredOn : string ;
   author : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   note : R5_Annotation [];
   action : R5_RequestGroup_Action [];
}
