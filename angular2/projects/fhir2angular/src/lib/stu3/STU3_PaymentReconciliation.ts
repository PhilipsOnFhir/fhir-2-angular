import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PaymentReconciliation_Detail } from './STU3_PaymentReconciliation_Detail'
import { STU3_PaymentReconciliation_ProcessNote } from './STU3_PaymentReconciliation_ProcessNote'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_PaymentReconciliation      extends STU3_DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   period : STU3_Period ;
   created : string ;
   organization : STU3_Reference ;
   request : STU3_Reference ;
   outcome : STU3_CodeableConcept ;
   disposition : string ;
   requestProvider : STU3_Reference ;
   requestOrganization : STU3_Reference ;
   detail : STU3_PaymentReconciliation_Detail [];
   form : STU3_CodeableConcept ;
   total : string ;
   processNote : STU3_PaymentReconciliation_ProcessNote [];
}
