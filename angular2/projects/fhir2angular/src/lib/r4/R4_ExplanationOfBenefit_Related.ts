import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_ExplanationOfBenefit_Related      extends R4_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Related';
   claim : R4_Reference ;
   relationship : R4_CodeableConcept ;
   reference : R4_Identifier ;
}
