import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ConditionDefinition_Medication      extends BackboneElement
{

   static def : string = 'ConditionDefinition_Medication';
   category : CodeableConcept ;
   code : CodeableConcept ;
}
