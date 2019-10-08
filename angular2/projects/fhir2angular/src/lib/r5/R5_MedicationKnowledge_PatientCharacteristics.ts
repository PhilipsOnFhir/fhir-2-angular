import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_MedicationKnowledge_PatientCharacteristics      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_PatientCharacteristics';
   characteristicCodeableConcept : R5_CodeableConcept ;
   characteristicQuantity : R5_Quantity ;
   value : string [];
}
