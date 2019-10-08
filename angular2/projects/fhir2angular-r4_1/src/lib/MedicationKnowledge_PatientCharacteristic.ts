import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationKnowledge_PatientCharacteristic      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_PatientCharacteristic';
   characteristicCodeableConcept : CodeableConcept ;
   characteristicQuantity : Quantity ;
   value : string [];
}
