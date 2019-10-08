import { R4_1_AppointmentStatusEnum } from './R4_1_AppointmentStatusEnum'
import { R4_1_Appointment_Participant } from './R4_1_Appointment_Participant'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Appointment      extends R4_1_DomainResource
{

   static def : string = 'Appointment';
   identifier : R4_1_Identifier [];
   status : R4_1_AppointmentStatusEnum ;
   cancelationReason : R4_1_CodeableConcept ;
   serviceCategory : R4_1_CodeableConcept [];
   serviceType : R4_1_CodeableConcept [];
   specialty : R4_1_CodeableConcept [];
   appointmentType : R4_1_CodeableConcept ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   priority : string ;
   description : string ;
   supportingInformation : R4_1_Reference [];
   start : string ;
   end : string ;
   minutesDuration : string ;
   slot : R4_1_Reference [];
   created : string ;
   comment : string ;
   patientInstruction : string ;
   basedOn : R4_1_Reference [];
   participant : R4_1_Appointment_Participant [];
   requestedPeriod : R4_1_Period [];
}
