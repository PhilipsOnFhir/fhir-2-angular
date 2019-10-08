import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Practitioner_Qualification      extends R5_BackboneElement
{

   static def : string = 'Practitioner_Qualification';
   identifier : R5_Identifier [];
   code : R5_CodeableConcept ;
   period : R5_Period ;
   issuer : R5_Reference ;
}
