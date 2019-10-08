import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicationKnowledge_Dosage } from './R4_1_MedicationKnowledge_Dosage'
import { R4_1_MedicationKnowledge_PatientCharacteristics } from './R4_1_MedicationKnowledge_PatientCharacteristics'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicationKnowledge_AdministrationGuidelines      extends R4_1_BackboneElement
{

   static def : string = 'MedicationKnowledge_AdministrationGuidelines';
   dosage : R4_1_MedicationKnowledge_Dosage [];
   indicationCodeableConcept : R4_1_CodeableConcept ;
   indicationReference : R4_1_Reference ;
   patientCharacteristics : R4_1_MedicationKnowledge_PatientCharacteristics [];
}
