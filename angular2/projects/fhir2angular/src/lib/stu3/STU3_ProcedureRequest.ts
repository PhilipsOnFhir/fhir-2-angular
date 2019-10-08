import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_ProcedureRequest_Requester } from './STU3_ProcedureRequest_Requester'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RequestIntentEnum } from './STU3_RequestIntentEnum'
import { STU3_RequestPriorityEnum } from './STU3_RequestPriorityEnum'
import { STU3_RequestStatusEnum } from './STU3_RequestStatusEnum'
import { STU3_Timing } from './STU3_Timing'

export class STU3_ProcedureRequest      extends STU3_DomainResource
{

   static def : string = 'ProcedureRequest';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   replaces : STU3_Reference [];
   requisition : STU3_Identifier ;
   status : STU3_RequestStatusEnum ;
   intent : STU3_RequestIntentEnum ;
   priority : STU3_RequestPriorityEnum ;
   doNotPerform : boolean ;
   category : STU3_CodeableConcept [];
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   occurrenceTiming : STU3_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : STU3_CodeableConcept ;
   authoredOn : string ;
   requester : STU3_ProcedureRequest_Requester ;
   performerType : STU3_CodeableConcept ;
   performer : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   supportingInfo : STU3_Reference [];
   specimen : STU3_Reference [];
   bodySite : STU3_CodeableConcept [];
   note : STU3_Annotation [];
   relevantHistory : STU3_Reference [];
}
