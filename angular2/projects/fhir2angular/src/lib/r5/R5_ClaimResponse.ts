import { R5_Attachment } from './R5_Attachment'
import { R5_ClaimProcessingCodesEnum } from './R5_ClaimProcessingCodesEnum'
import { R5_ClaimResponse_AddItem } from './R5_ClaimResponse_AddItem'
import { R5_ClaimResponse_Adjudication } from './R5_ClaimResponse_Adjudication'
import { R5_ClaimResponse_Error } from './R5_ClaimResponse_Error'
import { R5_ClaimResponse_Insurance } from './R5_ClaimResponse_Insurance'
import { R5_ClaimResponse_Item } from './R5_ClaimResponse_Item'
import { R5_ClaimResponse_Payment } from './R5_ClaimResponse_Payment'
import { R5_ClaimResponse_ProcessNote } from './R5_ClaimResponse_ProcessNote'
import { R5_ClaimResponse_Total } from './R5_ClaimResponse_Total'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_UseEnum } from './R5_UseEnum'

export class R5_ClaimResponse      extends R5_DomainResource
{

   static def : string = 'ClaimResponse';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   type : R5_CodeableConcept ;
   subType : R5_CodeableConcept ;
   use : R5_UseEnum ;
   patient : R5_Reference ;
   created : string ;
   insurer : R5_Reference ;
   requestor : R5_Reference ;
   request : R5_Reference ;
   outcome : R5_ClaimProcessingCodesEnum ;
   disposition : string ;
   preAuthRef : string ;
   preAuthPeriod : R5_Period ;
   payeeType : R5_CodeableConcept ;
   item : R5_ClaimResponse_Item [];
   addItem : R5_ClaimResponse_AddItem [];
   adjudication : R5_ClaimResponse_Adjudication [];
   total : R5_ClaimResponse_Total [];
   payment : R5_ClaimResponse_Payment ;
   fundsReserve : R5_CodeableConcept ;
   formCode : R5_CodeableConcept ;
   form : R5_Attachment ;
   processNote : R5_ClaimResponse_ProcessNote [];
   communicationRequest : R5_Reference [];
   insurance : R5_ClaimResponse_Insurance [];
   error : R5_ClaimResponse_Error [];
}
