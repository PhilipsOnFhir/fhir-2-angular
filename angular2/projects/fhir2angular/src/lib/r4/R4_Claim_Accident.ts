import { R4_Address } from './R4_Address'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Claim_Accident      extends R4_BackboneElement
{

   static def : string = 'Claim_Accident';
   date : string ;
   type : R4_CodeableConcept ;
   locationAddress : R4_Address ;
   locationReference : R4_Reference ;
}
