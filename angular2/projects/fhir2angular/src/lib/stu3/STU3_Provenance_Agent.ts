import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Provenance_Agent      extends STU3_BackboneElement
{

   static def : string = 'Provenance_Agent';
   role : STU3_CodeableConcept [];
   whoUri : string ;
   whoReference : STU3_Reference ;
   onBehalfOfUri : string ;
   onBehalfOfReference : STU3_Reference ;
   relatedAgentType : STU3_CodeableConcept ;
}
