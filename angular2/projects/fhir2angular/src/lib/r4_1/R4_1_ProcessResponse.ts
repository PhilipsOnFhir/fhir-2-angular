import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ProcessOutcomeCodesEnum } from './R4_1_ProcessOutcomeCodesEnum'
import { R4_1_ProcessResponse_ProcessNote } from './R4_1_ProcessResponse_ProcessNote'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ProcessResponse      extends R4_1_DomainResource
{

   static def : string = 'ProcessResponse';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   created : string ;
   organization : R4_1_Reference ;
   request : R4_1_Reference ;
   outcome : R4_1_ProcessOutcomeCodesEnum ;
   disposition : string ;
   requestProvider : R4_1_Reference ;
   form : R4_1_CodeableConcept ;
   processNote : R4_1_ProcessResponse_ProcessNote [];
   error : R4_1_CodeableConcept [];
   communicationRequest : R4_1_Reference [];
}
