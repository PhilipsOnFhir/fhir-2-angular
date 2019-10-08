import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_PaymentReconciliation_Detail      extends STU3_BackboneElement
{

   static def : string = 'PaymentReconciliation_Detail';
   type : STU3_CodeableConcept ;
   request : STU3_Reference ;
   response : STU3_Reference ;
   submitter : STU3_Reference ;
   payee : STU3_Reference ;
   date : string ;
   amount : string ;
}
