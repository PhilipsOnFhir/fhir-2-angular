import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Contract_ValuedItem      extends R5_BackboneElement
{

   static def : string = 'Contract_ValuedItem';
   entityCodeableConcept : R5_CodeableConcept ;
   entityReference : R5_Reference ;
   identifier : R5_Identifier ;
   effectiveTime : string ;
   quantity : R5_Quantity ;
   unitPrice : R5_Money ;
   factor : string ;
   points : string ;
   net : R5_Money ;
   payment : string ;
   paymentDate : string ;
   responsible : R5_Reference ;
   recipient : R5_Reference ;
   linkId : string [];
   securityLabelNumber : string [];
}
