import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_MedicationOrderStatusEnum } from './DSTU2_MedicationOrderStatusEnum'
import { DSTU2_MedicationOrder_DispenseRequest } from './DSTU2_MedicationOrder_DispenseRequest'
import { DSTU2_MedicationOrder_DosageInstruction } from './DSTU2_MedicationOrder_DosageInstruction'
import { DSTU2_MedicationOrder_Substitution } from './DSTU2_MedicationOrder_Substitution'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_MedicationOrder      extends DSTU2_DomainResource
{

   static def : string = 'MedicationOrder';
   identifier : DSTU2_Identifier [];
   dateWritten : string ;
   status : DSTU2_MedicationOrderStatusEnum ;
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
   dosageInstruction : DSTU2_MedicationOrder_DosageInstruction [];
   dispenseRequest : DSTU2_MedicationOrder_DispenseRequest ;
   substitution : DSTU2_MedicationOrder_Substitution ;
   priorPrescription : DSTU2_Reference ;
}
