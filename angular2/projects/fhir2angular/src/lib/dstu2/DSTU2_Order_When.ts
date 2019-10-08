import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_Order_When      extends DSTU2_BackboneElement
{

   static def : string = 'Order_When';
   code : DSTU2_CodeableConcept ;
   schedule : DSTU2_Timing ;
}
