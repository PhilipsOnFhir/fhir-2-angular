import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CarePlanActivityStatusEnum } from './DSTU2_CarePlanActivityStatusEnum'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_CarePlan_Detail      extends DSTU2_BackboneElement
{

   static def : string = 'CarePlan_Detail';
   category : DSTU2_CodeableConcept ;
   code : DSTU2_CodeableConcept ;
   reasonCode : DSTU2_CodeableConcept [];
   reasonReference : DSTU2_Reference [];
   goal : DSTU2_Reference [];
   status : DSTU2_CarePlanActivityStatusEnum ;
   statusReason : DSTU2_CodeableConcept ;
   prohibited : boolean ;
   scheduledTiming : DSTU2_Timing ;
   scheduledPeriod : DSTU2_Period ;
   scheduledString : string ;
   location : DSTU2_Reference ;
   performer : DSTU2_Reference [];
   productCodeableConcept : DSTU2_CodeableConcept ;
   productReference : DSTU2_Reference ;
   dailyAmount : DSTU2_SimpleQuantity ;
   quantity : DSTU2_SimpleQuantity ;
   description : string ;
}
