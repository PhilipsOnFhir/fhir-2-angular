import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_Reference } from './R5_Reference'

export class R5_PaymentNotice      extends R5_DomainResource
{

   static def : string = 'PaymentNotice';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   request : R5_Reference ;
   response : R5_Reference ;
   created : string ;
   provider : R5_Reference ;
   payment : R5_Reference ;
   paymentDate : string ;
   payee : R5_Reference ;
   recipient : R5_Reference ;
   amount : R5_Money ;
   paymentStatus : R5_CodeableConcept ;
}
