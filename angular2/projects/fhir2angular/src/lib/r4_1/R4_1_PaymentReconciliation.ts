import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_PaymentReconciliation_Detail } from './R4_1_PaymentReconciliation_Detail'
import { R4_1_PaymentReconciliation_ProcessNote } from './R4_1_PaymentReconciliation_ProcessNote'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RemittanceOutcomeEnum } from './R4_1_RemittanceOutcomeEnum'

export class R4_1_PaymentReconciliation      extends R4_1_DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   period : R4_1_Period ;
   created : string ;
   paymentIssuer : R4_1_Reference ;
   request : R4_1_Reference ;
   requestor : R4_1_Reference ;
   outcome : R4_1_RemittanceOutcomeEnum ;
   disposition : string ;
   paymentDate : string ;
   paymentAmount : R4_1_Money ;
   paymentIdentifier : R4_1_Identifier ;
   detail : R4_1_PaymentReconciliation_Detail [];
   formCode : R4_1_CodeableConcept ;
   processNote : R4_1_PaymentReconciliation_ProcessNote [];
}
