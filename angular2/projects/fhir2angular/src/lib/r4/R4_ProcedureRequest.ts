import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_ProcedureRequestPriorityEnum } from './R4_ProcedureRequestPriorityEnum'
import { R4_ProcedureRequestStatusEnum } from './R4_ProcedureRequestStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'

export class R4_ProcedureRequest      extends R4_DomainResource
{

   static def : string = 'ProcedureRequest';
   identifier : R4_Identifier [];
   subject : R4_Reference ;
   code : R4_CodeableConcept ;
   bodySite : R4_CodeableConcept [];
   reasonCodeableConcept : R4_CodeableConcept ;
   reasonReference : R4_Reference ;
   scheduledDateTime : string ;
   scheduledPeriod : R4_Period ;
   scheduledTiming : R4_Timing ;
   encounter : R4_Reference ;
   performer : R4_Reference ;
   status : R4_ProcedureRequestStatusEnum ;
   notes : R4_Annotation [];
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R4_CodeableConcept ;
   orderedOn : string ;
   orderer : R4_Reference ;
   priority : R4_ProcedureRequestPriorityEnum ;
}
