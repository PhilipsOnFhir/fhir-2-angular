import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ConditionDefinition_Plan      extends BackboneElement
{

   static def : string = 'ConditionDefinition_Plan';
   role : CodeableConcept ;
   reference : Reference ;
}
