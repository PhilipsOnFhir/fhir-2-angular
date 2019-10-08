import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MedicationPrescriptionStatusEnum } from './STU3_MedicationPrescriptionStatusEnum'
import { STU3_MedicationPrescription_Dispense } from './STU3_MedicationPrescription_Dispense'
import { STU3_MedicationPrescription_DosageInstruction } from './STU3_MedicationPrescription_DosageInstruction'
import { STU3_MedicationPrescription_Substitution } from './STU3_MedicationPrescription_Substitution'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationPrescription      extends STU3_DomainResource
{

   static def : string = 'MedicationPrescription';
   identifier : STU3_Identifier [];
   dateWritten : string ;
   status : STU3_MedicationPrescriptionStatusEnum ;
   dateEnded : string ;
   reasonEnded : STU3_CodeableConcept ;
   patient : STU3_Reference ;
   prescriber : STU3_Reference ;
   encounter : STU3_Reference ;
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   note : string ;
   medicationCodeableConcept : STU3_CodeableConcept ;
   medicationReference : STU3_Reference ;
   dosageInstruction : STU3_MedicationPrescription_DosageInstruction [];
   dispense : STU3_MedicationPrescription_Dispense ;
   substitution : STU3_MedicationPrescription_Substitution ;
   priorPrescription : STU3_Reference ;
}
