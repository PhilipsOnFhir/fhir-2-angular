import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicationPrescriptionStatusEnum } from './R4_MedicationPrescriptionStatusEnum'
import { R4_MedicationPrescription_Dispense } from './R4_MedicationPrescription_Dispense'
import { R4_MedicationPrescription_DosageInstruction } from './R4_MedicationPrescription_DosageInstruction'
import { R4_MedicationPrescription_Substitution } from './R4_MedicationPrescription_Substitution'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationPrescription      extends R4_DomainResource
{

   static def : string = 'MedicationPrescription';
   identifier : R4_Identifier [];
   dateWritten : string ;
   status : R4_MedicationPrescriptionStatusEnum ;
   dateEnded : string ;
   reasonEnded : R4_CodeableConcept ;
   patient : R4_Reference ;
   prescriber : R4_Reference ;
   encounter : R4_Reference ;
   reasonCodeableConcept : R4_CodeableConcept ;
   reasonReference : R4_Reference ;
   note : string ;
   medicationCodeableConcept : R4_CodeableConcept ;
   medicationReference : R4_Reference ;
   dosageInstruction : R4_MedicationPrescription_DosageInstruction [];
   dispense : R4_MedicationPrescription_Dispense ;
   substitution : R4_MedicationPrescription_Substitution ;
   priorPrescription : R4_Reference ;
}
