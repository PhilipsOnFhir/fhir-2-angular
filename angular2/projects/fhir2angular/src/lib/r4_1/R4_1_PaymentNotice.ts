import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_PaymentNotice      extends R4_1_DomainResource
{

   static def : string = 'PaymentNotice';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   request : R4_1_Reference ;
   response : R4_1_Reference ;
   created : string ;
   provider : R4_1_Reference ;
   payment : R4_1_Reference ;
   paymentDate : string ;
   payee : R4_1_Reference ;
   recipient : R4_1_Reference ;
   amount : R4_1_Money ;
   paymentStatus : R4_1_CodeableConcept ;
}
