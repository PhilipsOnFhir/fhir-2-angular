import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestIntentEnum } from './R4_1_RequestIntentEnum'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_RequestStatusEnum } from './R4_1_RequestStatusEnum'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_ServiceRequest      extends R4_1_DomainResource
{

   static def : string = 'ServiceRequest';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_1_Reference [];
   replaces : R4_1_Reference [];
   requisition : R4_1_Identifier ;
   status : R4_1_RequestStatusEnum ;
   intent : R4_1_RequestIntentEnum ;
   category : R4_1_CodeableConcept [];
   priority : R4_1_RequestPriorityEnum ;
   doNotPerform : boolean ;
   code : R4_1_CodeableConcept ;
   orderDetail : R4_1_CodeableConcept [];
   quantityQuantity : R4_1_Quantity ;
   quantityRatio : R4_1_Ratio ;
   quantityRange : R4_1_Range ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   occurrenceTiming : R4_1_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R4_1_CodeableConcept ;
   authoredOn : string ;
   requester : R4_1_Reference ;
   performerType : R4_1_CodeableConcept ;
   performer : R4_1_Reference [];
   locationCode : R4_1_CodeableConcept [];
   locationReference : R4_1_Reference [];
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   insurance : R4_1_Reference [];
   supportingInfo : R4_1_Reference [];
   specimen : R4_1_Reference [];
   bodySite : R4_1_CodeableConcept [];
   note : R4_1_Annotation [];
   patientInstruction : string ;
   relevantHistory : R4_1_Reference [];
}
