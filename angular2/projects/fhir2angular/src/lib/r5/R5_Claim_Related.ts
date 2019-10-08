import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Claim_Related      extends R5_BackboneElement
{

   static def : string = 'Claim_Related';
   claim : R5_Reference ;
   relationship : R5_CodeableConcept ;
   reference : R5_Identifier ;
}
