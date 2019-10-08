import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Claim_SubDetail      extends R4_1_BackboneElement
{

   static def : string = 'Claim_SubDetail';
   sequence : string ;
   revenue : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept ;
   productOrService : R4_1_CodeableConcept ;
   modifier : R4_1_CodeableConcept [];
   programCode : R4_1_CodeableConcept [];
   quantity : R4_1_Quantity ;
   unitPrice : R4_1_Money ;
   factor : string ;
   net : R4_1_Money ;
   udi : R4_1_Reference [];
}
