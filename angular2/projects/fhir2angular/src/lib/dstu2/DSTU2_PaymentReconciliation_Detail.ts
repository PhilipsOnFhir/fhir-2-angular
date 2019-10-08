import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Money } from './DSTU2_Money'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_PaymentReconciliation_Detail      extends DSTU2_BackboneElement
{

   static def : string = 'PaymentReconciliation_Detail';
   type : DSTU2_Coding ;
   request : DSTU2_Reference ;
   responce : DSTU2_Reference ;
   submitter : DSTU2_Reference ;
   payee : DSTU2_Reference ;
   date : string ;
   amount : DSTU2_Money ;
}
