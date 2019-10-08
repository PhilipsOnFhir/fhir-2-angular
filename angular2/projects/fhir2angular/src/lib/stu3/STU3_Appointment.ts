import { STU3_AppointmentStatusEnum } from './STU3_AppointmentStatusEnum'
import { STU3_Appointment_Participant } from './STU3_Appointment_Participant'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Appointment      extends STU3_DomainResource
{

   static def : string = 'Appointment';
   identifier : STU3_Identifier [];
   status : STU3_AppointmentStatusEnum ;
   serviceCategory : STU3_CodeableConcept ;
   serviceType : STU3_CodeableConcept [];
   specialty : STU3_CodeableConcept [];
   appointmentType : STU3_CodeableConcept ;
   reason : STU3_CodeableConcept [];
   indication : STU3_Reference [];
   priority : string ;
   description : string ;
   supportingInformation : STU3_Reference [];
   start : string ;
   end : string ;
   minutesDuration : string ;
   slot : STU3_Reference [];
   created : string ;
   comment : string ;
   incomingReferral : STU3_Reference [];
   participant : STU3_Appointment_Participant [];
   requestedPeriod : STU3_Period [];
}
