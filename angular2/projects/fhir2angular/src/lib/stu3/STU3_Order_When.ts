import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Timing } from './STU3_Timing'

export class STU3_Order_When      extends STU3_BackboneElement
{

   static def : string = 'Order_When';
   code : STU3_CodeableConcept ;
   schedule : STU3_Timing ;
}
