import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Practitioner_Qualification      extends R4_1_BackboneElement
{

   static def : string = 'Practitioner_Qualification';
   identifier : R4_1_Identifier [];
   code : R4_1_CodeableConcept ;
   period : R4_1_Period ;
   issuer : R4_1_Reference ;
}
