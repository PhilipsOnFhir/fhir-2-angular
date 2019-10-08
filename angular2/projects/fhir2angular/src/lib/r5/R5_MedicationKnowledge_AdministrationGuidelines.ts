import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicationKnowledge_Dosage } from './R5_MedicationKnowledge_Dosage'
import { R5_MedicationKnowledge_PatientCharacteristics } from './R5_MedicationKnowledge_PatientCharacteristics'
import { R5_Reference } from './R5_Reference'

export class R5_MedicationKnowledge_AdministrationGuidelines      extends R5_BackboneElement
{

   static def : string = 'MedicationKnowledge_AdministrationGuidelines';
   dosage : R5_MedicationKnowledge_Dosage [];
   indicationCodeableConcept : R5_CodeableConcept ;
   indicationReference : R5_Reference ;
   patientCharacteristics : R5_MedicationKnowledge_PatientCharacteristics [];
}
