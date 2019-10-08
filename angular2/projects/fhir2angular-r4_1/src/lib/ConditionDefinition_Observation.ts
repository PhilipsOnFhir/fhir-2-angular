import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ConditionDefinition_Observation      extends BackboneElement
{

   static def : string = 'ConditionDefinition_Observation';
   category : CodeableConcept ;
   code : CodeableConcept ;
}
