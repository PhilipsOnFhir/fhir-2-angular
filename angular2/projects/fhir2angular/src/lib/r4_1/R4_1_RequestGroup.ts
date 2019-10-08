import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestGroup_Action } from './R4_1_RequestGroup_Action'
import { R4_1_RequestIntentEnum } from './R4_1_RequestIntentEnum'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_RequestStatusEnum } from './R4_1_RequestStatusEnum'

export class R4_1_RequestGroup      extends R4_1_DomainResource
{

   static def : string = 'RequestGroup';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_1_Reference [];
   replaces : R4_1_Reference [];
   groupIdentifier : R4_1_Identifier ;
   status : R4_1_RequestStatusEnum ;
   intent : R4_1_RequestIntentEnum ;
   priority : R4_1_RequestPriorityEnum ;
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   authoredOn : string ;
   author : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   note : R4_1_Annotation [];
   action : R4_1_RequestGroup_Action [];
}
