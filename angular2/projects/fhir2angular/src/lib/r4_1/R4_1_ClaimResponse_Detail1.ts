import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ClaimResponse_Adjudication } from './R4_1_ClaimResponse_Adjudication'
import { R4_1_ClaimResponse_SubDetail1 } from './R4_1_ClaimResponse_SubDetail1'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_ClaimResponse_Detail1      extends R4_1_BackboneElement
{

   static def : string = 'ClaimResponse_Detail1';
   productOrService : R4_1_CodeableConcept ;
   modifier : R4_1_CodeableConcept [];
   quantity : R4_1_Quantity ;
   unitPrice : R4_1_Money ;
   factor : string ;
   net : R4_1_Money ;
   noteNumber : string [];
   adjudication : R4_1_ClaimResponse_Adjudication [];
   subDetail : R4_1_ClaimResponse_SubDetail1 [];
}
