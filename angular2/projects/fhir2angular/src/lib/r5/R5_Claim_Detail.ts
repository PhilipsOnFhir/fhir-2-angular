import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Claim_SubDetail } from './R5_Claim_SubDetail'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Claim_Detail      extends R5_BackboneElement
{

   static def : string = 'Claim_Detail';
   sequence : string ;
   revenue : R5_CodeableConcept ;
   category : R5_CodeableConcept ;
   productOrService : R5_CodeableConcept ;
   modifier : R5_CodeableConcept [];
   programCode : R5_CodeableConcept [];
   quantity : R5_Quantity ;
   unitPrice : R5_Money ;
   factor : string ;
   net : R5_Money ;
   udi : R5_Reference [];
   subDetail : R5_Claim_SubDetail [];
}
