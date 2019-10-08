import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DeviceUseStatementStatusEnum } from './R4_1_DeviceUseStatementStatusEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_DeviceUseStatement      extends R4_1_DomainResource
{

   static def : string = 'DeviceUseStatement';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference [];
   status : R4_1_DeviceUseStatementStatusEnum ;
   subject : R4_1_Reference ;
   derivedFrom : R4_1_Reference [];
   timingTiming : R4_1_Timing ;
   timingPeriod : R4_1_Period ;
   timingDateTime : string ;
   recordedOn : string ;
   source : R4_1_Reference ;
   device : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   bodySite : R4_1_CodeableConcept ;
   note : R4_1_Annotation [];
}
