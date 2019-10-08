import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_PaymentReconciliation_Detail      extends R4_1_BackboneElement
{

   static def : string = 'PaymentReconciliation_Detail';
   identifier : R4_1_Identifier ;
   predecessor : R4_1_Identifier ;
   type : R4_1_CodeableConcept ;
   request : R4_1_Reference ;
   submitter : R4_1_Reference ;
   response : R4_1_Reference ;
   date : string ;
   responsible : R4_1_Reference ;
   payee : R4_1_Reference ;
   amount : R4_1_Money ;
}
