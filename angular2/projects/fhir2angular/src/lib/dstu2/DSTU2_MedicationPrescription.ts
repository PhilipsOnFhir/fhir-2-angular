import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_MedicationPrescriptionStatusEnum } from './DSTU2_MedicationPrescriptionStatusEnum'
import { DSTU2_MedicationPrescription_Dispense } from './DSTU2_MedicationPrescription_Dispense'
import { DSTU2_MedicationPrescription_DosageInstruction } from './DSTU2_MedicationPrescription_DosageInstruction'
import { DSTU2_MedicationPrescription_Substitution } from './DSTU2_MedicationPrescription_Substitution'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_MedicationPrescription      extends DSTU2_DomainResource
{

   static def : string = 'MedicationPrescription';
   identifier : DSTU2_Identifier [];
   dateWritten : string ;
   status : DSTU2_MedicationPrescriptionStatusEnum ;
   dateEnded : string ;
   reasonEnded : DSTU2_CodeableConcept ;
   patient : DSTU2_Reference ;
   prescriber : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   reasonCodeableConcept : DSTU2_CodeableConcept ;
   reasonReference : DSTU2_Reference ;
   note : string ;
   medicationCodeableConcept : DSTU2_CodeableConcept ;
   medicationReference : DSTU2_Reference ;
   dosageInstruction : DSTU2_MedicationPrescription_DosageInstruction [];
   dispense : DSTU2_MedicationPrescription_Dispense ;
   substitution : DSTU2_MedicationPrescription_Substitution ;
   priorPrescription : DSTU2_Reference ;
}
