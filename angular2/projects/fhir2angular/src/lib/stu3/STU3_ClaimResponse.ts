import { STU3_ClaimResponse_AddItem } from './STU3_ClaimResponse_AddItem'
import { STU3_ClaimResponse_Error } from './STU3_ClaimResponse_Error'
import { STU3_ClaimResponse_Insurance } from './STU3_ClaimResponse_Insurance'
import { STU3_ClaimResponse_Item } from './STU3_ClaimResponse_Item'
import { STU3_ClaimResponse_Payment } from './STU3_ClaimResponse_Payment'
import { STU3_ClaimResponse_ProcessNote } from './STU3_ClaimResponse_ProcessNote'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ClaimResponse      extends STU3_DomainResource
{

   static def : string = 'ClaimResponse';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   patient : STU3_Reference ;
   created : string ;
   insurer : STU3_Reference ;
   requestProvider : STU3_Reference ;
   requestOrganization : STU3_Reference ;
   request : STU3_Reference ;
   outcome : STU3_CodeableConcept ;
   disposition : string ;
   payeeType : STU3_CodeableConcept ;
   item : STU3_ClaimResponse_Item [];
   addItem : STU3_ClaimResponse_AddItem [];
   error : STU3_ClaimResponse_Error [];
   totalCost : string ;
   unallocDeductable : string ;
   totalBenefit : string ;
   payment : STU3_ClaimResponse_Payment ;
   reserved : STU3_Coding ;
   form : STU3_CodeableConcept ;
   processNote : STU3_ClaimResponse_ProcessNote [];
   communicationRequest : STU3_Reference [];
   insurance : STU3_ClaimResponse_Insurance [];
}
