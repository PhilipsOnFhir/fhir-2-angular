import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'

export class R5_ClaimResponse_Payment      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_Payment';
   type : R5_CodeableConcept ;
   adjustment : R5_Money ;
   adjustmentReason : R5_CodeableConcept ;
   date : string ;
   amount : R5_Money ;
   identifier : R5_Identifier ;
}
