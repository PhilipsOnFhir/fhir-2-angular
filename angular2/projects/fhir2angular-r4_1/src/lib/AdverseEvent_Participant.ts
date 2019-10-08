import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class AdverseEvent_Participant      extends BackboneElement
{

   static def : string = 'AdverseEvent_Participant';
   function : CodeableConcept ;
   actor : Reference ;
}
