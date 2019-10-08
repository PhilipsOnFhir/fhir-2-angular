import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Dosage } from './STU3_Dosage'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MedicationRequestIntentEnum } from './STU3_MedicationRequestIntentEnum'
import { STU3_MedicationRequestPriorityEnum } from './STU3_MedicationRequestPriorityEnum'
import { STU3_MedicationRequestStatusEnum } from './STU3_MedicationRequestStatusEnum'
import { STU3_MedicationRequest_DispenseRequest } from './STU3_MedicationRequest_DispenseRequest'
import { STU3_MedicationRequest_Requester } from './STU3_MedicationRequest_Requester'
import { STU3_MedicationRequest_Substitution } from './STU3_MedicationRequest_Substitution'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MedicationRequest      extends STU3_DomainResource
{

   static def : string = 'MedicationRequest';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   groupIdentifier : STU3_Identifier ;
   status : STU3_MedicationRequestStatusEnum ;
   intent : STU3_MedicationRequestIntentEnum ;
   category : STU3_CodeableConcept ;
   priority : STU3_MedicationRequestPriorityEnum ;
   medicationCodeableConcept : STU3_CodeableConcept ;
   medicationReference : STU3_Reference ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   supportingInformation : STU3_Reference [];
   authoredOn : string ;
   requester : STU3_MedicationRequest_Requester ;
   recorder : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   note : STU3_Annotation [];
   dosageInstruction : STU3_Dosage [];
   dispenseRequest : STU3_MedicationRequest_DispenseRequest ;
   substitution : STU3_MedicationRequest_Substitution ;
   priorPrescription : STU3_Reference ;
   detectedIssue : STU3_Reference [];
   eventHistory : STU3_Reference [];
}
