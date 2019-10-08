import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DeviceUseStatementStatusEnum } from './R5_DeviceUseStatementStatusEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'

export class R5_DeviceUseStatement      extends R5_DomainResource
{

   static def : string = 'DeviceUseStatement';
   identifier : R5_Identifier [];
   basedOn : R5_Reference [];
   status : R5_DeviceUseStatementStatusEnum ;
   subject : R5_Reference ;
   derivedFrom : R5_Reference [];
   timingTiming : R5_Timing ;
   timingPeriod : R5_Period ;
   timingDateTime : string ;
   recordedOn : string ;
   source : R5_Reference ;
   device : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   bodySite : R5_CodeableConcept ;
   note : R5_Annotation [];
}
