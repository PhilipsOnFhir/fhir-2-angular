import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { ConditionPreconditionTypeEnum } from './ConditionPreconditionTypeEnum'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class ConditionDefinition_Precondition      extends BackboneElement
{

   static def : string = 'ConditionDefinition_Precondition';
   type : ConditionPreconditionTypeEnum ;
   code : CodeableConcept ;
   valueCodeableConcept : CodeableConcept ;
   valueQuantity : Quantity ;
}
