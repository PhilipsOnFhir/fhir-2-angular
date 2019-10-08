import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Contract_ValuedItem1      extends STU3_BackboneElement
{

   static def : string = 'Contract_ValuedItem1';
   entityCodeableConcept : STU3_CodeableConcept ;
   entityReference : STU3_Reference ;
   identifier : STU3_Identifier ;
   effectiveTime : string ;
   quantity : STU3_Quantity ;
   unitPrice : string ;
   factor : string ;
   points : string ;
   net : string ;
}
