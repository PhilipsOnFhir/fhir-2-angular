import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Practitioner_Qualification      extends STU3_BackboneElement
{

   static def : string = 'Practitioner_Qualification';
   identifier : STU3_Identifier [];
   code : STU3_CodeableConcept ;
   period : STU3_Period ;
   issuer : STU3_Reference ;
}
