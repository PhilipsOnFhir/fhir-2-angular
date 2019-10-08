import { DSTU2_AppointmentStatusEnum } from './DSTU2_AppointmentStatusEnum'
import { DSTU2_Appointment_Participant } from './DSTU2_Appointment_Participant'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Appointment      extends DSTU2_DomainResource
{

   static def : string = 'Appointment';
   identifier : DSTU2_Identifier [];
   status : DSTU2_AppointmentStatusEnum ;
   type : DSTU2_CodeableConcept ;
   reason : DSTU2_CodeableConcept ;
   priority : string ;
   description : string ;
   start : string ;
   end : string ;
   minutesDuration : string ;
   slot : DSTU2_Reference [];
   comment : string ;
   participant : DSTU2_Appointment_Participant [];
}
