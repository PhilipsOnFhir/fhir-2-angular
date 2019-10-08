import { R5_Address } from './R5_Address'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Claim_Accident      extends R5_BackboneElement
{

   static def : string = 'Claim_Accident';
   date : string ;
   type : R5_CodeableConcept ;
   locationAddress : R5_Address ;
   locationReference : R5_Reference ;
}
