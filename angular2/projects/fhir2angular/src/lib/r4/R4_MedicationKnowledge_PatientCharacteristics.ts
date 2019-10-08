import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_MedicationKnowledge_PatientCharacteristics      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_PatientCharacteristics';
   characteristicCodeableConcept : R4_CodeableConcept ;
   characteristicQuantity : R4_Quantity ;
   value : string [];
}
