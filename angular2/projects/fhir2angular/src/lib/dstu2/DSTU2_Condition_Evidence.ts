import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Condition_Evidence      extends DSTU2_BackboneElement
{

   static def : string = 'Condition_Evidence';
   code : DSTU2_CodeableConcept ;
   detail : DSTU2_Reference [];
}
