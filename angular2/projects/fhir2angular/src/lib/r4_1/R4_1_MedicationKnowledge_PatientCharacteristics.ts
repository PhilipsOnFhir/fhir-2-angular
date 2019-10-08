import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MedicationKnowledge_PatientCharacteristics      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_PatientCharacteristics';
   characteristicCodeableConcept : R4_1_CodeableConcept ;
   characteristicQuantity : R4_1_Quantity ;
   value : string [];
}
