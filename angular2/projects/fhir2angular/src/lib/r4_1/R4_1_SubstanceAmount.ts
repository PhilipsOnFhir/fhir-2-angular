import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_SubstanceAmount_ReferenceRange } from './R4_1_SubstanceAmount_ReferenceRange'

export class R4_1_SubstanceAmount      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceAmount';
   amountQuantity : R4_1_Quantity ;
   amountRange : R4_1_Range ;
   amountString : string ;
   amountType : R4_1_CodeableConcept ;
   amountText : string ;
   referenceRange : R4_1_SubstanceAmount_ReferenceRange ;
}
