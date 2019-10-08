import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Claim_Payee      extends STU3_BackboneElement
{

   static def : string = 'Claim_Payee';
   type : STU3_CodeableConcept ;
   resourceType : STU3_Coding ;
   party : STU3_Reference ;
}
