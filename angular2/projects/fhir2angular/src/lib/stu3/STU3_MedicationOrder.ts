import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MedicationOrderCategoryEnum } from './STU3_MedicationOrderCategoryEnum'
import { STU3_MedicationOrderStatusEnum } from './STU3_MedicationOrderStatusEnum'
import { STU3_MedicationOrder_DispenseRequest } from './STU3_MedicationOrder_DispenseRequest'
import { STU3_MedicationOrder_Substitution } from './STU3_MedicationOrder_Substitution'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationOrder      extends STU3_DomainResource
{

   static def : string = 'MedicationOrder';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   requisition : STU3_Identifier ;
   status : STU3_MedicationOrderStatusEnum ;
   stage : STU3_CodeableConcept ;
   medicationCodeableConcept : STU3_CodeableConcept ;
   medicationReference : STU3_Reference ;
   patient : STU3_Reference ;
   encounter : STU3_Reference ;
   supportingInformation : STU3_Reference [];
   dateWritten : string ;
   prescriber : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   note : STU3_Annotation [];
   category : STU3_MedicationOrderCategoryEnum ;
   dosageInstruction : string [];
   dispenseRequest : STU3_MedicationOrder_DispenseRequest ;
   substitution : STU3_MedicationOrder_Substitution ;
   priorPrescription : STU3_Reference ;
   eventHistory : STU3_Reference [];
}
