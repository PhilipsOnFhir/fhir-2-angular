import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicationKnowledge_Dosage } from './R4_MedicationKnowledge_Dosage'
import { R4_MedicationKnowledge_PatientCharacteristics } from './R4_MedicationKnowledge_PatientCharacteristics'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationKnowledge_AdministrationGuidelines      extends R4_BackboneElement
{

   static def : string = 'MedicationKnowledge_AdministrationGuidelines';
   dosage : R4_MedicationKnowledge_Dosage [];
   indicationCodeableConcept : R4_CodeableConcept ;
   indicationReference : R4_Reference ;
   patientCharacteristics : R4_MedicationKnowledge_PatientCharacteristics [];
}
