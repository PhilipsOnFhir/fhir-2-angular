import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_ProcedureRequestPriorityEnum } from './DSTU2_ProcedureRequestPriorityEnum'
import { DSTU2_ProcedureRequestStatusEnum } from './DSTU2_ProcedureRequestStatusEnum'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_ProcedureRequest      extends DSTU2_DomainResource
{

   static def : string = 'ProcedureRequest';
   identifier : DSTU2_Identifier [];
   subject : DSTU2_Reference ;
   code : DSTU2_CodeableConcept ;
   bodySite : DSTU2_CodeableConcept [];
   reasonCodeableConcept : DSTU2_CodeableConcept ;
   reasonReference : DSTU2_Reference ;
   scheduledDateTime : string ;
   scheduledPeriod : DSTU2_Period ;
   scheduledTiming : DSTU2_Timing ;
   encounter : DSTU2_Reference ;
   performer : DSTU2_Reference ;
   status : DSTU2_ProcedureRequestStatusEnum ;
   notes : DSTU2_Annotation [];
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : DSTU2_CodeableConcept ;
   orderedOn : string ;
   orderer : DSTU2_Reference ;
   priority : DSTU2_ProcedureRequestPriorityEnum ;
}
