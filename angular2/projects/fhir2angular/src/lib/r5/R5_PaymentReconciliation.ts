import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_PaymentReconciliation_Detail } from './R5_PaymentReconciliation_Detail'
import { R5_PaymentReconciliation_ProcessNote } from './R5_PaymentReconciliation_ProcessNote'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RemittanceOutcomeEnum } from './R5_RemittanceOutcomeEnum'

export class R5_PaymentReconciliation      extends R5_DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   period : R5_Period ;
   created : string ;
   paymentIssuer : R5_Reference ;
   request : R5_Reference ;
   requestor : R5_Reference ;
   outcome : R5_RemittanceOutcomeEnum ;
   disposition : string ;
   paymentDate : string ;
   paymentAmount : R5_Money ;
   paymentIdentifier : R5_Identifier ;
   detail : R5_PaymentReconciliation_Detail [];
   formCode : R5_CodeableConcept ;
   processNote : R5_PaymentReconciliation_ProcessNote [];
}
