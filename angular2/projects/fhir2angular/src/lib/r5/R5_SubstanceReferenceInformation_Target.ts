import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'

export class R5_SubstanceReferenceInformation_Target      extends R5_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Target';
   target : R5_Identifier ;
   type : R5_CodeableConcept ;
   interaction : R5_CodeableConcept ;
   organism : R5_CodeableConcept ;
   organismType : R5_CodeableConcept ;
   amountQuantity : R5_Quantity ;
   amountRange : R5_Range ;
   amountString : string ;
   amountType : R5_CodeableConcept ;
   source : R5_Reference [];
}
