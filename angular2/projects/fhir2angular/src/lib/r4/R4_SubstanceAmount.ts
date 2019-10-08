import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_SubstanceAmount_ReferenceRange } from './R4_SubstanceAmount_ReferenceRange'

export class R4_SubstanceAmount      extends R4_BackboneElement
{

   static def : string = 'SubstanceAmount';
   amountQuantity : R4_Quantity ;
   amountRange : R4_Range ;
   amountString : string ;
   amountType : R4_CodeableConcept ;
   amountText : string ;
   referenceRange : R4_SubstanceAmount_ReferenceRange ;
}
