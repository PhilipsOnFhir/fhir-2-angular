import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_RequestGroup_Action } from './R4_RequestGroup_Action'
import { R4_RequestIntentEnum } from './R4_RequestIntentEnum'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_RequestStatusEnum } from './R4_RequestStatusEnum'

export class R4_RequestGroup      extends R4_DomainResource
{

   static def : string = 'RequestGroup';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_Reference [];
   replaces : R4_Reference [];
   groupIdentifier : R4_Identifier ;
   status : R4_RequestStatusEnum ;
   intent : R4_RequestIntentEnum ;
   priority : R4_RequestPriorityEnum ;
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   authoredOn : string ;
   author : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   note : R4_Annotation [];
   action : R4_RequestGroup_Action [];
}
