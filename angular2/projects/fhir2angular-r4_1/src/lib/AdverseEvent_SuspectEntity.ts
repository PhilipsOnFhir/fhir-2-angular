import { AdverseEvent_Causality } from './AdverseEvent_Causality'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class AdverseEvent_SuspectEntity      extends BackboneElement
{

   static def : string = 'AdverseEvent_SuspectEntity';
   instanceCodeableConcept : CodeableConcept ;
   instanceReference : Reference ;
   causality : AdverseEvent_Causality ;
}
