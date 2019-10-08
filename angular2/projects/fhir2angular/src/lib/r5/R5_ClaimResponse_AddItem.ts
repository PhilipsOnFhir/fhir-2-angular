import { R5_Address } from './R5_Address'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ClaimResponse_Adjudication } from './R5_ClaimResponse_Adjudication'
import { R5_ClaimResponse_Detail1 } from './R5_ClaimResponse_Detail1'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_ClaimResponse_AddItem      extends R5_BackboneElement
{

   static def : string = 'ClaimResponse_AddItem';
   itemSequence : string [];
   detailSequence : string [];
   subdetailSequence : string [];
   provider : R5_Reference [];
   productOrService : R5_CodeableConcept ;
   modifier : R5_CodeableConcept [];
   programCode : R5_CodeableConcept [];
   servicedDate : string ;
   servicedPeriod : R5_Period ;
   locationCodeableConcept : R5_CodeableConcept ;
   locationAddress : R5_Address ;
   locationReference : R5_Reference ;
   quantity : R5_Quantity ;
   unitPrice : R5_Money ;
   factor : string ;
   net : R5_Money ;
   bodySite : R5_CodeableConcept ;
   subSite : R5_CodeableConcept [];
   noteNumber : string [];
   adjudication : R5_ClaimResponse_Adjudication [];
   detail : R5_ClaimResponse_Detail1 [];
}
