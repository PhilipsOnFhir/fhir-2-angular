import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CarePlanActivityStatusEnum } from './STU3_CarePlanActivityStatusEnum'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Timing } from './STU3_Timing'

export class STU3_CarePlan_Detail      extends STU3_BackboneElement
{

   static def : string = 'CarePlan_Detail';
   category : STU3_CodeableConcept ;
   definition : STU3_Reference ;
   code : STU3_CodeableConcept ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   goal : STU3_Reference [];
   status : STU3_CarePlanActivityStatusEnum ;
   statusReason : string ;
   prohibited : boolean ;
   scheduledTiming : STU3_Timing ;
   scheduledPeriod : STU3_Period ;
   scheduledString : string ;
   location : STU3_Reference ;
   performer : STU3_Reference [];
   productCodeableConcept : STU3_CodeableConcept ;
   productReference : STU3_Reference ;
   dailyAmount : STU3_Quantity ;
   quantity : STU3_Quantity ;
   description : string ;
}
