import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CarePlanActivityKindEnum } from './R5_CarePlanActivityKindEnum'
import { R5_CarePlanActivityStatusEnum } from './R5_CarePlanActivityStatusEnum'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'

export class R5_CarePlan_Detail      extends R5_BackboneElement
{

   static def : string = 'CarePlan_Detail';
   kind : R5_CarePlanActivityKindEnum ;
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   code : R5_CodeableConcept ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   goal : R5_Reference [];
   status : R5_CarePlanActivityStatusEnum ;
   statusReason : R5_CodeableConcept ;
   doNotPerform : boolean ;
   scheduledTiming : R5_Timing ;
   scheduledPeriod : R5_Period ;
   scheduledString : string ;
   location : R5_Reference ;
   performer : R5_Reference [];
   productCodeableConcept : R5_CodeableConcept ;
   productReference : R5_Reference ;
   dailyAmount : R5_Quantity ;
   quantity : R5_Quantity ;
   description : string ;
}
