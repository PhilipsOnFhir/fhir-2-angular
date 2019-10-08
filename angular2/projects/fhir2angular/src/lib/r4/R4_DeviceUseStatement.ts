import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DeviceUseStatementStatusEnum } from './R4_DeviceUseStatementStatusEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'

export class R4_DeviceUseStatement      extends R4_DomainResource
{

   static def : string = 'DeviceUseStatement';
   identifier : R4_Identifier [];
   basedOn : R4_Reference [];
   status : R4_DeviceUseStatementStatusEnum ;
   subject : R4_Reference ;
   derivedFrom : R4_Reference [];
   timingTiming : R4_Timing ;
   timingPeriod : R4_Period ;
   timingDateTime : string ;
   recordedOn : string ;
   source : R4_Reference ;
   device : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   bodySite : R4_CodeableConcept ;
   note : R4_Annotation [];
}
