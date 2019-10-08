import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract_ValuedItem      extends R4_1_BackboneElement
{

   static def : string = 'Contract_ValuedItem';
   entityCodeableConcept : R4_1_CodeableConcept ;
   entityReference : R4_1_Reference ;
   identifier : R4_1_Identifier ;
   effectiveTime : string ;
   quantity : R4_1_Quantity ;
   unitPrice : R4_1_Money ;
   factor : string ;
   points : string ;
   net : R4_1_Money ;
   payment : string ;
   paymentDate : string ;
   responsible : R4_1_Reference ;
   recipient : R4_1_Reference ;
   linkId : string [];
   securityLabelNumber : string [];
}
