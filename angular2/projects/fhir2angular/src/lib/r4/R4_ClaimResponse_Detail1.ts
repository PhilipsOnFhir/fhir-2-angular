import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ClaimResponse_Adjudication } from './R4_ClaimResponse_Adjudication'
import { R4_ClaimResponse_SubDetail1 } from './R4_ClaimResponse_SubDetail1'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Money } from './R4_Money'
import { R4_Quantity } from './R4_Quantity'

export class R4_ClaimResponse_Detail1      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Detail1';
   productOrService : R4_CodeableConcept ;
   modifier : R4_CodeableConcept [];
   quantity : R4_Quantity ;
   unitPrice : R4_Money ;
   factor : string ;
   net : R4_Money ;
   noteNumber : string [];
   adjudication : R4_ClaimResponse_Adjudication [];
   subDetail : R4_ClaimResponse_SubDetail1 [];
}
