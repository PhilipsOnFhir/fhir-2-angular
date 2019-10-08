import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicationKnowledge_Dosage } from './MedicationKnowledge_Dosage'
import { MedicationKnowledge_PatientCharacteristic } from './MedicationKnowledge_PatientCharacteristic'
import { Reference } from './Reference'

export class MedicationKnowledge_AdministrationGuideline      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_AdministrationGuideline';
   dosage : MedicationKnowledge_Dosage [];
   indicationCodeableConcept : CodeableConcept ;
   indicationReference : Reference ;
   patientCharacteristic : MedicationKnowledge_PatientCharacteristic [];
}
