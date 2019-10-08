import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Money } from './DSTU2_Money'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Contract_ValuedItem1      extends DSTU2_BackboneElement
{

   static def : string = 'Contract_ValuedItem1';
   entityCodeableConcept : DSTU2_CodeableConcept ;
   entityReference : DSTU2_Reference ;
   identifier : DSTU2_Identifier ;
   effectiveTime : string ;
   quantity : DSTU2_SimpleQuantity ;
   unitPrice : DSTU2_Money ;
   factor : string ;
   points : string ;
   net : DSTU2_Money ;
}
