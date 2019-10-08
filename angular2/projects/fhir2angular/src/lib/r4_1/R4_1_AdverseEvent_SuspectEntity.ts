import { R4_1_AdverseEvent_Causality } from './R4_1_AdverseEvent_Causality'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_AdverseEvent_SuspectEntity      extends R4_1_BackboneElement
{

   static def : string = 'AdverseEvent_SuspectEntity';
   instance : R4_1_Reference ;
   causality : R4_1_AdverseEvent_Causality [];
}
