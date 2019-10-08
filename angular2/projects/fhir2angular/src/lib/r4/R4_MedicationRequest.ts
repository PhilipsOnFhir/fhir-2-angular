import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage } from './R4_Dosage'
import { R4_Identifier } from './R4_Identifier'
import { R4_MedicationRequest_DispenseRequest } from './R4_MedicationRequest_DispenseRequest'
import { R4_MedicationRequest_Substitution } from './R4_MedicationRequest_Substitution'
import { R4_Reference } from './R4_Reference'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'

export class R4_MedicationRequest      extends R4_DomainResource
{

   static def : string = 'MedicationRequest';
   identifier : R4_Identifier [];
   status : string ;
   statusReason : R4_CodeableConcept ;
   intent : string ;
   category : R4_CodeableConcept [];
   priority : R4_RequestPriorityEnum ;
   doNotPerform : boolean ;
   reportedBoolean : boolean ;
   reportedReference : R4_Reference ;
   medicationCodeableConcept : R4_CodeableConcept ;
   medicationReference : R4_Reference ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   supportingInformation : R4_Reference [];
   authoredOn : string ;
   requester : R4_Reference ;
   performer : R4_Reference ;
   performerType : R4_CodeableConcept ;
   recorder : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_Reference [];
   groupIdentifier : R4_Identifier ;
   courseOfTherapyType : R4_CodeableConcept ;
   insurance : R4_Reference [];
   note : R4_Annotation [];
   dosageInstruction : R4_Dosage [];
   dispenseRequest : R4_MedicationRequest_DispenseRequest ;
   substitution : R4_MedicationRequest_Substitution ;
   priorPrescription : R4_Reference ;
   detectedIssue : R4_Reference [];
   eventHistory : R4_Reference [];
}
