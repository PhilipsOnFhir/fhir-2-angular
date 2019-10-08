import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'

export class R4_1_ClaimResponse_Payment      extends R4_1_BackboneElement
{

   static def : string = 'ClaimResponse_Payment';
   type : R4_1_CodeableConcept ;
   adjustment : R4_1_Money ;
   adjustmentReason : R4_1_CodeableConcept ;
   date : string ;
   amount : R4_1_Money ;
   identifier : R4_1_Identifier ;
}
