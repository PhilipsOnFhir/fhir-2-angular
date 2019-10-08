import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_DeviceUseStatement      extends DSTU2_DomainResource
{

   static def : string = 'DeviceUseStatement';
   bodySiteCodeableConcept : DSTU2_CodeableConcept ;
   bodySiteReference : DSTU2_Reference ;
   whenUsed : DSTU2_Period ;
   device : DSTU2_Reference ;
   identifier : DSTU2_Identifier [];
   indication : DSTU2_CodeableConcept [];
   notes : string [];
   recordedOn : string ;
   subject : DSTU2_Reference ;
   timingTiming : DSTU2_Timing ;
   timingPeriod : DSTU2_Period ;
   timingDateTime : string ;
}
