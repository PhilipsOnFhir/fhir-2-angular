import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DeviceMetricCategoryEnum } from './R4_DeviceMetricCategoryEnum'
import { R4_DeviceMetricColorEnum } from './R4_DeviceMetricColorEnum'
import { R4_DeviceMetricOperationalStatusEnum } from './R4_DeviceMetricOperationalStatusEnum'
import { R4_DeviceMetric_Calibration } from './R4_DeviceMetric_Calibration'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'

export class R4_DeviceMetric      extends R4_DomainResource
{

   static def : string = 'DeviceMetric';
   identifier : R4_Identifier [];
   type : R4_CodeableConcept ;
   unit : R4_CodeableConcept ;
   source : R4_Reference ;
   parent : R4_Reference ;
   operationalStatus : R4_DeviceMetricOperationalStatusEnum ;
   color : R4_DeviceMetricColorEnum ;
   category : R4_DeviceMetricCategoryEnum ;
   measurementPeriod : R4_Timing ;
   calibration : R4_DeviceMetric_Calibration [];
}
