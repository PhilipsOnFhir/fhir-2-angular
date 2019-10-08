import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ProcessResponse_ProcessNote } from './STU3_ProcessResponse_ProcessNote'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ProcessResponse      extends STU3_DomainResource
{

   static def : string = 'ProcessResponse';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   created : string ;
   organization : STU3_Reference ;
   request : STU3_Reference ;
   outcome : STU3_CodeableConcept ;
   disposition : string ;
   requestProvider : STU3_Reference ;
   requestOrganization : STU3_Reference ;
   form : STU3_CodeableConcept ;
   processNote : STU3_ProcessResponse_ProcessNote [];
   error : STU3_CodeableConcept [];
   communicationRequest : STU3_Reference [];
}
