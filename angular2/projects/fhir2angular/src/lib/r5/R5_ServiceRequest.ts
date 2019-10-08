import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'
import { R5_RequestIntentEnum } from './R5_RequestIntentEnum'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_RequestStatusEnum } from './R5_RequestStatusEnum'
import { R5_Timing } from './R5_Timing'

export class R5_ServiceRequest      extends R5_DomainResource
{

   static def : string = 'ServiceRequest';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R5_Reference [];
   replaces : R5_Reference [];
   requisition : R5_Identifier ;
   status : R5_RequestStatusEnum ;
   intent : R5_RequestIntentEnum ;
   category : R5_CodeableConcept [];
   priority : R5_RequestPriorityEnum ;
   doNotPerform : boolean ;
   code : R5_CodeableConcept ;
   orderDetail : R5_CodeableConcept [];
   quantityQuantity : R5_Quantity ;
   quantityRatio : R5_Ratio ;
   quantityRange : R5_Range ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   occurrenceTiming : R5_Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : R5_CodeableConcept ;
   authoredOn : string ;
   requester : R5_Reference ;
   performerType : R5_CodeableConcept ;
   performer : R5_Reference [];
   locationCode : R5_CodeableConcept [];
   locationReference : R5_Reference [];
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   insurance : R5_Reference [];
   supportingInfo : R5_Reference [];
   specimen : R5_Reference [];
   bodySite : R5_CodeableConcept [];
   note : R5_Annotation [];
   patientInstruction : string ;
   relevantHistory : R5_Reference [];
}
