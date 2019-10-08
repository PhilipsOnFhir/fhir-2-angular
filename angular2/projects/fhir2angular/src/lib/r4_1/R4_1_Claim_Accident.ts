import { R4_1_Address } from './R4_1_Address'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Claim_Accident      extends R4_1_BackboneElement
{

   static def : string = 'Claim_Accident';
   date : string ;
   type : R4_1_CodeableConcept ;
   locationAddress : R4_1_Address ;
   locationReference : R4_1_Reference ;
}
