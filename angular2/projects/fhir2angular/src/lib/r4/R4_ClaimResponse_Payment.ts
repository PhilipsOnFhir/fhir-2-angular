import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'

export class R4_ClaimResponse_Payment      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Payment';
   type : R4_CodeableConcept ;
   adjustment : R4_Money ;
   adjustmentReason : R4_CodeableConcept ;
   date : string ;
   amount : R4_Money ;
   identifier : R4_Identifier ;
}
