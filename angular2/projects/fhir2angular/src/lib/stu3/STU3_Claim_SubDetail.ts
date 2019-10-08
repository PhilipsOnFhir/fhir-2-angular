import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Claim_SubDetail      extends STU3_BackboneElement
{

   static def : string = 'Claim_SubDetail';
   sequence : string ;
   revenue : STU3_CodeableConcept ;
   category : STU3_CodeableConcept ;
   service : STU3_CodeableConcept ;
   modifier : STU3_CodeableConcept [];
   programCode : STU3_CodeableConcept [];
   quantity : STU3_Quantity ;
   unitPrice : string ;
   factor : string ;
   net : string ;
   udi : STU3_Reference [];
}
