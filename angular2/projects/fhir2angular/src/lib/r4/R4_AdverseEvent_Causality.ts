import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_AdverseEvent_Causality      extends R4_BackboneElement
{

   static def : string = 'AdverseEvent_Causality';
   assessment : R4_CodeableConcept ;
   productRelatedness : string ;
   author : R4_Reference ;
   method : R4_CodeableConcept ;
}
