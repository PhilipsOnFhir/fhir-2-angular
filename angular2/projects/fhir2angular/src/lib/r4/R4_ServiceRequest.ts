import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'
import { R4_RequestIntentEnum } from './R4_RequestIntentEnum'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_RequestStatusEnum } from './R4_RequestStatusEnum'
import { R4_Timing } from './R4_Timing'

export class R4_ServiceRequest      extends R4_DomainResource
{

   static def : string = 'ServiceRequest';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_Reference [];
   replaces : R4_Reference [];
   requisition : R4_Identifier ;
   status : R4_RequestStatusEnum ;
   intent : R4_RequestIntentEnum ;
   category : R4_CodeableConcept [];
   priority : R4_RequestPriorityEnum ;
   doNotPerform : boolean ;
   code : R4_CodeableConcept ;
   orderDetail : R4_CodeableConcept [];
   quantityQuantity : R4_Quantity ;
   quantityRatio : R4_Ratio ;
   quantityRange : R4_Range ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   occurrenceTiming : R4_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R4_CodeableConcept ;
   authoredOn : string ;
   requester : R4_Reference ;
   performerType : R4_CodeableConcept ;
   performer : R4_Reference [];
   locationCode : R4_CodeableConcept [];
   locationReference : R4_Reference [];
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   insurance : R4_Reference [];
   supportingInfo : R4_Reference [];
   specimen : R4_Reference [];
   bodySite : R4_CodeableConcept [];
   note : R4_Annotation [];
   patientInstruction : string ;
   relevantHistory : R4_Reference [];
}
