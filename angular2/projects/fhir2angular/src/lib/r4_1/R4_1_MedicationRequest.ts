import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage } from './R4_1_Dosage'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MedicationRequest_DispenseRequest } from './R4_1_MedicationRequest_DispenseRequest'
import { R4_1_MedicationRequest_Substitution } from './R4_1_MedicationRequest_Substitution'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'

export class R4_1_MedicationRequest      extends R4_1_DomainResource
{

   static def : string = 'MedicationRequest';
   identifier : R4_1_Identifier [];
   status : string ;
   statusReason : R4_1_CodeableConcept ;
   intent : string ;
   category : R4_1_CodeableConcept [];
   priority : R4_1_RequestPriorityEnum ;
   doNotPerform : boolean ;
   reportedBoolean : boolean ;
   reportedReference : R4_1_Reference ;
   medicationCodeableConcept : R4_1_CodeableConcept ;
   medicationReference : R4_1_Reference ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   supportingInformation : R4_1_Reference [];
   authoredOn : string ;
   requester : R4_1_Reference ;
   performer : R4_1_Reference ;
   performerType : R4_1_CodeableConcept ;
   recorder : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_1_Reference [];
   groupIdentifier : R4_1_Identifier ;
   courseOfTherapyType : R4_1_CodeableConcept ;
   insurance : R4_1_Reference [];
   note : R4_1_Annotation [];
   dosageInstruction : R4_1_Dosage [];
   dispenseRequest : R4_1_MedicationRequest_DispenseRequest ;
   substitution : R4_1_MedicationRequest_Substitution ;
   priorPrescription : R4_1_Reference ;
   detectedIssue : R4_1_Reference [];
   eventHistory : R4_1_Reference [];
}
