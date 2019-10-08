import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Consent_Actor1      extends STU3_BackboneElement
{

   static def : string = 'Consent_Actor1';
   role : STU3_CodeableConcept ;
   reference : STU3_Reference ;
}
