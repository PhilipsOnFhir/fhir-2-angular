import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_ProcessOutcomeCodesEnum } from './R5_ProcessOutcomeCodesEnum'
import { R5_ProcessResponse_ProcessNote } from './R5_ProcessResponse_ProcessNote'
import { R5_Reference } from './R5_Reference'

export class R5_ProcessResponse      extends R5_DomainResource
{

   static def : string = 'ProcessResponse';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   created : string ;
   organization : R5_Reference ;
   request : R5_Reference ;
   outcome : R5_ProcessOutcomeCodesEnum ;
   disposition : string ;
   requestProvider : R5_Reference ;
   form : R5_CodeableConcept ;
   processNote : R5_ProcessResponse_ProcessNote [];
   error : R5_CodeableConcept [];
   communicationRequest : R5_Reference [];
}
