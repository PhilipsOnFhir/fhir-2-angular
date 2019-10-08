import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationKnowledge_KineticCharacteristic      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_KineticCharacteristic';
   type : CodeableConcept ;
   valueQuantity : Quantity ;
   valueDuration : string ;
}
