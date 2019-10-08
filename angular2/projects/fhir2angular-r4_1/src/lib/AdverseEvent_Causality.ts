import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class AdverseEvent_Causality      extends BackboneElement
{

   static def : string = 'AdverseEvent_Causality';
   assessmentMethod : CodeableConcept ;
   entityRelatedness : CodeableConcept ;
   author : Reference ;
}
