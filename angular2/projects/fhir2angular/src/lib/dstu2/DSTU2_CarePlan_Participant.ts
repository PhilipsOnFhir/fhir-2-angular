import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_CarePlan_Participant      extends DSTU2_BackboneElement
{

   static def : string = 'CarePlan_Participant';
   role : DSTU2_CodeableConcept ;
   member : DSTU2_Reference ;
}
