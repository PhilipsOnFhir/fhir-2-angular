import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DeviceUseStatementStatusEnum } from './STU3_DeviceUseStatementStatusEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Timing } from './STU3_Timing'

export class STU3_DeviceUseStatement      extends STU3_DomainResource
{

   static def : string = 'DeviceUseStatement';
   identifier : STU3_Identifier [];
   status : STU3_DeviceUseStatementStatusEnum ;
   subject : STU3_Reference ;
   whenUsed : STU3_Period ;
   timingTiming : STU3_Timing ;
   timingPeriod : STU3_Period ;
   timingDateTime : string ;
   recordedOn : string ;
   source : STU3_Reference ;
   device : STU3_Reference ;
   indication : STU3_CodeableConcept [];
   bodySite : STU3_CodeableConcept ;
   note : STU3_Annotation [];
}
