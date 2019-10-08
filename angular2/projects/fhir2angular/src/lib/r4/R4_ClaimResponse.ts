import { R4_Attachment } from './R4_Attachment'
import { R4_ClaimProcessingCodesEnum } from './R4_ClaimProcessingCodesEnum'
import { R4_ClaimResponse_AddItem } from './R4_ClaimResponse_AddItem'
import { R4_ClaimResponse_Adjudication } from './R4_ClaimResponse_Adjudication'
import { R4_ClaimResponse_Error } from './R4_ClaimResponse_Error'
import { R4_ClaimResponse_Insurance } from './R4_ClaimResponse_Insurance'
import { R4_ClaimResponse_Item } from './R4_ClaimResponse_Item'
import { R4_ClaimResponse_Payment } from './R4_ClaimResponse_Payment'
import { R4_ClaimResponse_ProcessNote } from './R4_ClaimResponse_ProcessNote'
import { R4_ClaimResponse_Total } from './R4_ClaimResponse_Total'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_UseEnum } from './R4_UseEnum'

export class R4_ClaimResponse      extends R4_DomainResource
{

   static def : string = 'ClaimResponse';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   type : R4_CodeableConcept ;
   subType : R4_CodeableConcept ;
   use : R4_UseEnum ;
   patient : R4_Reference ;
   created : string ;
   insurer : R4_Reference ;
   requestor : R4_Reference ;
   request : R4_Reference ;
   outcome : R4_ClaimProcessingCodesEnum ;
   disposition : string ;
   preAuthRef : string ;
   preAuthPeriod : R4_Period ;
   payeeType : R4_CodeableConcept ;
   item : R4_ClaimResponse_Item [];
   addItem : R4_ClaimResponse_AddItem [];
   adjudication : R4_ClaimResponse_Adjudication [];
   total : R4_ClaimResponse_Total [];
   payment : R4_ClaimResponse_Payment ;
   fundsReserve : R4_CodeableConcept ;
   formCode : R4_CodeableConcept ;
   form : R4_Attachment ;
   processNote : R4_ClaimResponse_ProcessNote [];
   communicationRequest : R4_Reference [];
   insurance : R4_ClaimResponse_Insurance [];
   error : R4_ClaimResponse_Error [];
}
