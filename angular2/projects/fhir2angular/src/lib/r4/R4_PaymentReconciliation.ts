import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_PaymentReconciliation_Detail } from './R4_PaymentReconciliation_Detail'
import { R4_PaymentReconciliation_ProcessNote } from './R4_PaymentReconciliation_ProcessNote'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RemittanceOutcomeEnum } from './R4_RemittanceOutcomeEnum'

export class R4_PaymentReconciliation      extends R4_DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   period : R4_Period ;
   created : string ;
   paymentIssuer : R4_Reference ;
   request : R4_Reference ;
   requestor : R4_Reference ;
   outcome : R4_RemittanceOutcomeEnum ;
   disposition : string ;
   paymentDate : string ;
   paymentAmount : R4_Money ;
   paymentIdentifier : R4_Identifier ;
   detail : R4_PaymentReconciliation_Detail [];
   formCode : R4_CodeableConcept ;
   processNote : R4_PaymentReconciliation_ProcessNote [];
}
