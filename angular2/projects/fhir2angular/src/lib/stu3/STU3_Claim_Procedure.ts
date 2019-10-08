import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Claim_Procedure      extends STU3_BackboneElement
{

   static def : string = 'Claim_Procedure';
   sequence : string ;
   date : string ;
   procedureCodeableConcept : STU3_CodeableConcept ;
   procedureReference : STU3_Reference ;
}
