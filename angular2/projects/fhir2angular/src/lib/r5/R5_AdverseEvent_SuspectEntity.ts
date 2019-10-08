import { R5_AdverseEvent_Causality } from './R5_AdverseEvent_Causality'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_AdverseEvent_SuspectEntity      extends R5_BackboneElement
{

   static def : string = 'AdverseEvent_SuspectEntity';
   instance : R5_Reference ;
   causality : R5_AdverseEvent_Causality [];
}
