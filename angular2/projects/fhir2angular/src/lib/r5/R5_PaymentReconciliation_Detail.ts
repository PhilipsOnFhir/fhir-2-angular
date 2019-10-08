import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_Reference } from './R5_Reference'

export class R5_PaymentReconciliation_Detail      extends R5_BackboneElement
{

   static def : string = 'PaymentReconciliation_Detail';
   identifier : R5_Identifier ;
   predecessor : R5_Identifier ;
   type : R5_CodeableConcept ;
   request : R5_Reference ;
   submitter : R5_Reference ;
   response : R5_Reference ;
   date : string ;
   responsible : R5_Reference ;
   payee : R5_Reference ;
   amount : R5_Money ;
}
