import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CarePlanActivityKindEnum } from './R4_CarePlanActivityKindEnum'
import { R4_CarePlanActivityStatusEnum } from './R4_CarePlanActivityStatusEnum'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'

export class R4_CarePlan_Detail      extends R4_BackboneElement
{

   static def : string = 'CarePlan_Detail';
   kind : R4_CarePlanActivityKindEnum ;
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   code : R4_CodeableConcept ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   goal : R4_Reference [];
   status : R4_CarePlanActivityStatusEnum ;
   statusReason : R4_CodeableConcept ;
   doNotPerform : boolean ;
   scheduledTiming : R4_Timing ;
   scheduledPeriod : R4_Period ;
   scheduledString : string ;
   location : R4_Reference ;
   performer : R4_Reference [];
   productCodeableConcept : R4_CodeableConcept ;
   productReference : R4_Reference ;
   dailyAmount : R4_Quantity ;
   quantity : R4_Quantity ;
   description : string ;
}
