import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicationOrderStatusEnum } from './R4_MedicationOrderStatusEnum'
import { R4_MedicationOrder_DispenseRequest } from './R4_MedicationOrder_DispenseRequest'
import { R4_MedicationOrder_DosageInstruction } from './R4_MedicationOrder_DosageInstruction'
import { R4_MedicationOrder_Substitution } from './R4_MedicationOrder_Substitution'
import { R4_Reference } from './R4_Reference'

export class R4_MedicationOrder      extends R4_DomainResource
{

   static def : string = 'MedicationOrder';
   identifier : R4_Identifier [];
   dateWritten : string ;
   status : R4_MedicationOrderStatusEnum ;
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
   dosageInstruction : R4_MedicationOrder_DosageInstruction [];
   dispenseRequest : R4_MedicationOrder_DispenseRequest ;
   substitution : R4_MedicationOrder_Substitution ;
   priorPrescription : R4_Reference ;
}
