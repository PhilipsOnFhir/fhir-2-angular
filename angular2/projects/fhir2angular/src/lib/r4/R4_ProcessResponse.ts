import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_ProcessOutcomeCodesEnum } from './R4_ProcessOutcomeCodesEnum'
import { R4_ProcessResponse_ProcessNote } from './R4_ProcessResponse_ProcessNote'
import { R4_Reference } from './R4_Reference'

export class R4_ProcessResponse      extends R4_DomainResource
{

   static def : string = 'ProcessResponse';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   created : string ;
   organization : R4_Reference ;
   request : R4_Reference ;
   outcome : R4_ProcessOutcomeCodesEnum ;
   disposition : string ;
   requestProvider : R4_Reference ;
   form : R4_CodeableConcept ;
   processNote : R4_ProcessResponse_ProcessNote [];
   error : R4_CodeableConcept [];
   communicationRequest : R4_Reference [];
}
