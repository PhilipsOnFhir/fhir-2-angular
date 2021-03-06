import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Claim_Payee      extends BackboneElement
{

   static def : string = 'Claim_Payee';
   type : CodeableConcept ;
   party : Reference ;
}
