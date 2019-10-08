import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_AdverseEvent_Causality      extends R5_BackboneElement
{

   static def : string = 'AdverseEvent_Causality';
   assessment : R5_CodeableConcept ;
   productRelatedness : string ;
   author : R5_Reference ;
   method : R5_CodeableConcept ;
}
