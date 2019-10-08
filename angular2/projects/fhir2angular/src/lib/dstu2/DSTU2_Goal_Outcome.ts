import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Goal_Outcome      extends DSTU2_BackboneElement
{

   static def : string = 'Goal_Outcome';
   resultCodeableConcept : DSTU2_CodeableConcept ;
   resultReference : DSTU2_Reference ;
}
