import { R4_AdverseEvent_Causality } from './R4_AdverseEvent_Causality'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_AdverseEvent_SuspectEntity      extends R4_BackboneElement
{

   static def : string = 'AdverseEvent_SuspectEntity';
   instance : R4_Reference ;
   causality : R4_AdverseEvent_Causality [];
}
