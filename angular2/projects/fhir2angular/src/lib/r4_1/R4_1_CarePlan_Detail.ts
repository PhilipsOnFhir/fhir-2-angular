import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CarePlanActivityKindEnum } from './R4_1_CarePlanActivityKindEnum'
import { R4_1_CarePlanActivityStatusEnum } from './R4_1_CarePlanActivityStatusEnum'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_CarePlan_Detail      extends R4_1_BackboneElement
{

   static def : string = 'CarePlan_Detail';
   kind : R4_1_CarePlanActivityKindEnum ;
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   code : R4_1_CodeableConcept ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   goal : R4_1_Reference [];
   status : R4_1_CarePlanActivityStatusEnum ;
   statusReason : R4_1_CodeableConcept ;
   doNotPerform : boolean ;
   scheduledTiming : R4_1_Timing ;
   scheduledPeriod : R4_1_Period ;
   scheduledString : string ;
   location : R4_1_Reference ;
   performer : R4_1_Reference [];
   productCodeableConcept : R4_1_CodeableConcept ;
   productReference : R4_1_Reference ;
   dailyAmount : R4_1_Quantity ;
   quantity : R4_1_Quantity ;
   description : string ;
}
