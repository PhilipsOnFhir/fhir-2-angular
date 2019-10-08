import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_PaymentNotice      extends STU3_DomainResource
{

   static def : string = 'PaymentNotice';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   request : STU3_Reference ;
   response : STU3_Reference ;
   statusDate : string ;
   created : string ;
   target : STU3_Reference ;
   provider : STU3_Reference ;
   organization : STU3_Reference ;
   paymentStatus : STU3_CodeableConcept ;
}
