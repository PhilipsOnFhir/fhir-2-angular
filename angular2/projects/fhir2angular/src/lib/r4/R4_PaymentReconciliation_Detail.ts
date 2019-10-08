import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_Reference } from './R4_Reference'

export class R4_PaymentReconciliation_Detail      extends R4_BackboneElement
{

   static def : string = 'PaymentReconciliation_Detail';
   identifier : R4_Identifier ;
   predecessor : R4_Identifier ;
   type : R4_CodeableConcept ;
   request : R4_Reference ;
   submitter : R4_Reference ;
   response : R4_Reference ;
   date : string ;
   responsible : R4_Reference ;
   payee : R4_Reference ;
   amount : R4_Money ;
}
