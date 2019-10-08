import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicationRequest_DispenseRequest } from './R5_MedicationRequest_DispenseRequest'
import { R5_MedicationRequest_Substitution } from './R5_MedicationRequest_Substitution'
import { R5_Reference } from './R5_Reference'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'

export class R5_MedicationRequest      extends R5_DomainResource
{

   static def : string = 'MedicationRequest';
   identifier : R5_Identifier [];
   status : string ;
   statusReason : R5_CodeableConcept ;
   intent : string ;
   category : R5_CodeableConcept [];
   priority : R5_RequestPriorityEnum ;
   doNotPerform : boolean ;
   reportedBoolean : boolean ;
   reportedReference : R5_Reference ;
   medicationCodeableConcept : R5_CodeableConcept ;
   medicationReference : R5_Reference ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   supportingInformation : R5_Reference [];
   authoredOn : string ;
   requester : R5_Reference ;
   performer : R5_Reference ;
   performerType : R5_CodeableConcept ;
   recorder : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R5_Reference [];
   groupIdentifier : R5_Identifier ;
   courseOfTherapyType : R5_CodeableConcept ;
   insurance : R5_Reference [];
   note : R5_Annotation [];
   dosageInstruction : R5_Dosage [];
   dispenseRequest : R5_MedicationRequest_DispenseRequest ;
   substitution : R5_MedicationRequest_Substitution ;
   priorPrescription : R5_Reference ;
   detectedIssue : R5_Reference [];
   eventHistory : R5_Reference [];
}
