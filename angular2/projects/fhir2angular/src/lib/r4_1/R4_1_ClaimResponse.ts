import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_ClaimProcessingCodesEnum } from './R4_1_ClaimProcessingCodesEnum'
import { R4_1_ClaimResponse_AddItem } from './R4_1_ClaimResponse_AddItem'
import { R4_1_ClaimResponse_Adjudication } from './R4_1_ClaimResponse_Adjudication'
import { R4_1_ClaimResponse_Error } from './R4_1_ClaimResponse_Error'
import { R4_1_ClaimResponse_Insurance } from './R4_1_ClaimResponse_Insurance'
import { R4_1_ClaimResponse_Item } from './R4_1_ClaimResponse_Item'
import { R4_1_ClaimResponse_Payment } from './R4_1_ClaimResponse_Payment'
import { R4_1_ClaimResponse_ProcessNote } from './R4_1_ClaimResponse_ProcessNote'
import { R4_1_ClaimResponse_Total } from './R4_1_ClaimResponse_Total'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_UseEnum } from './R4_1_UseEnum'

export class R4_1_ClaimResponse      extends R4_1_DomainResource
{

   static def : string = 'ClaimResponse';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   type : R4_1_CodeableConcept ;
   subType : R4_1_CodeableConcept ;
   use : R4_1_UseEnum ;
   patient : R4_1_Reference ;
   created : string ;
   insurer : R4_1_Reference ;
   requestor : R4_1_Reference ;
   request : R4_1_Reference ;
   outcome : R4_1_ClaimProcessingCodesEnum ;
   disposition : string ;
   preAuthRef : string ;
   preAuthPeriod : R4_1_Period ;
   payeeType : R4_1_CodeableConcept ;
   item : R4_1_ClaimResponse_Item [];
   addItem : R4_1_ClaimResponse_AddItem [];
   adjudication : R4_1_ClaimResponse_Adjudication [];
   total : R4_1_ClaimResponse_Total [];
   payment : R4_1_ClaimResponse_Payment ;
   fundsReserve : R4_1_CodeableConcept ;
   formCode : R4_1_CodeableConcept ;
   form : R4_1_Attachment ;
   processNote : R4_1_ClaimResponse_ProcessNote [];
   communicationRequest : R4_1_Reference [];
   insurance : R4_1_ClaimResponse_Insurance [];
   error : R4_1_ClaimResponse_Error [];
}
