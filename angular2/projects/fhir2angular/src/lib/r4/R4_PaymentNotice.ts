import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_Reference } from './R4_Reference'

export class R4_PaymentNotice      extends R4_DomainResource
{

   static def : string = 'PaymentNotice';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   request : R4_Reference ;
   response : R4_Reference ;
   created : string ;
   provider : R4_Reference ;
   payment : R4_Reference ;
   paymentDate : string ;
   payee : R4_Reference ;
   recipient : R4_Reference ;
   amount : R4_Money ;
   paymentStatus : R4_CodeableConcept ;
}
