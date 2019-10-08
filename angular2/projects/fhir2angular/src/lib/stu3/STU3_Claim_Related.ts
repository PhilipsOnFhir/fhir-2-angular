import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Claim_Related      extends STU3_BackboneElement
{

   static def : string = 'Claim_Related';
   claim : STU3_Reference ;
   relationship : STU3_CodeableConcept ;
   reference : STU3_Identifier ;
}
