import { R4_AppointmentStatusEnum } from './R4_AppointmentStatusEnum'
import { R4_Appointment_Participant } from './R4_Appointment_Participant'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Appointment      extends R4_DomainResource
{

   static def : string = 'Appointment';
   identifier : R4_Identifier [];
   status : R4_AppointmentStatusEnum ;
   cancelationReason : R4_CodeableConcept ;
   serviceCategory : R4_CodeableConcept [];
   serviceType : R4_CodeableConcept [];
   specialty : R4_CodeableConcept [];
   appointmentType : R4_CodeableConcept ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   priority : string ;
   description : string ;
   supportingInformation : R4_Reference [];
   start : string ;
   end : string ;
   minutesDuration : string ;
   slot : R4_Reference [];
   created : string ;
   comment : string ;
   patientInstruction : string ;
   basedOn : R4_Reference [];
   participant : R4_Appointment_Participant [];
   requestedPeriod : R4_Period [];
}
