import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'

export class R4_SubstanceReferenceInformation_Target      extends R4_BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Target';
   target : R4_Identifier ;
   type : R4_CodeableConcept ;
   interaction : R4_CodeableConcept ;
   organism : R4_CodeableConcept ;
   organismType : R4_CodeableConcept ;
   amountQuantity : R4_Quantity ;
   amountRange : R4_Range ;
   amountString : string ;
   amountType : R4_CodeableConcept ;
   source : R4_Reference [];
}
