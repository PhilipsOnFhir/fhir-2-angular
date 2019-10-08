import { R5_AppointmentStatusEnum } from './R5_AppointmentStatusEnum'
import { R5_Appointment_Participant } from './R5_Appointment_Participant'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Appointment      extends R5_DomainResource
{

   static def : string = 'Appointment';
   identifier : R5_Identifier [];
   status : R5_AppointmentStatusEnum ;
   cancelationReason : R5_CodeableConcept ;
   serviceCategory : R5_CodeableConcept [];
   serviceType : R5_CodeableConcept [];
   specialty : R5_CodeableConcept [];
   appointmentType : R5_CodeableConcept ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   priority : string ;
   description : string ;
   supportingInformation : R5_Reference [];
   start : string ;
   end : string ;
   minutesDuration : string ;
   slot : R5_Reference [];
   created : string ;
   comment : string ;
   patientInstruction : string ;
   basedOn : R5_Reference [];
   participant : R5_Appointment_Participant [];
   requestedPeriod : R5_Period [];
}
