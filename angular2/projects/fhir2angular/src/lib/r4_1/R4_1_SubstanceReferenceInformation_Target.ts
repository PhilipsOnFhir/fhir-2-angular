import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_SubstanceReferenceInformation_Target      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Target';
   target : R4_1_Identifier ;
   type : R4_1_CodeableConcept ;
   interaction : R4_1_CodeableConcept ;
   organism : R4_1_CodeableConcept ;
   organismType : R4_1_CodeableConcept ;
   amountQuantity : R4_1_Quantity ;
   amountRange : R4_1_Range ;
   amountString : string ;
   amountType : R4_1_CodeableConcept ;
   source : R4_1_Reference [];
}
