import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_Reference } from './R4_Reference'
import { R4_SimpleQuantity } from './R4_SimpleQuantity'

export class R4_Contract_ValuedItem1      extends R4_BackboneElement
{

   static def : string = 'Contract_ValuedItem1';
   entityCodeableConcept : R4_CodeableConcept ;
   entityReference : R4_Reference ;
   identifier : R4_Identifier ;
   effectiveTime : string ;
   quantity : R4_SimpleQuantity ;
   unitPrice : R4_Money ;
   factor : string ;
   points : string ;
   net : R4_Money ;
}
