import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_SubstanceAmount_ReferenceRange } from './R5_SubstanceAmount_ReferenceRange'

export class R5_SubstanceAmount      extends R5_BackboneElement
{

   static def : string = 'SubstanceAmount';
   amountQuantity : R5_Quantity ;
   amountRange : R5_Range ;
   amountString : string ;
   amountType : R5_CodeableConcept ;
   amountText : string ;
   referenceRange : R5_SubstanceAmount_ReferenceRange ;
}
