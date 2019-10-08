import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Claim_Procedure      extends R4_1_BackboneElement
{

   static def : string = 'Claim_Procedure';
   sequence : string ;
   type : R4_1_CodeableConcept [];
   date : string ;
   procedureCodeableConcept : R4_1_CodeableConcept ;
   procedureReference : R4_1_Reference ;
   udi : R4_1_Reference [];
}
