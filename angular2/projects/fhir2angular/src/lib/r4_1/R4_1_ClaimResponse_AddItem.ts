import { R4_1_Address } from './R4_1_Address'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ClaimResponse_Adjudication } from './R4_1_ClaimResponse_Adjudication'
import { R4_1_ClaimResponse_Detail1 } from './R4_1_ClaimResponse_Detail1'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ClaimResponse_AddItem      extends R4_1_BackboneElement
{

   static def : string = 'ClaimResponse_AddItem';
   itemSequence : string [];
   detailSequence : string [];
   subdetailSequence : string [];
   provider : R4_1_Reference [];
   productOrService : R4_1_CodeableConcept ;
   modifier : R4_1_CodeableConcept [];
   programCode : R4_1_CodeableConcept [];
   servicedDate : string ;
   servicedPeriod : R4_1_Period ;
   locationCodeableConcept : R4_1_CodeableConcept ;
   locationAddress : R4_1_Address ;
   locationReference : R4_1_Reference ;
   quantity : R4_1_Quantity ;
   unitPrice : R4_1_Money ;
   factor : string ;
   net : R4_1_Money ;
   bodySite : R4_1_CodeableConcept ;
   subSite : R4_1_CodeableConcept [];
   noteNumber : string [];
   adjudication : R4_1_ClaimResponse_Adjudication [];
   detail : R4_1_ClaimResponse_Detail1 [];
}
