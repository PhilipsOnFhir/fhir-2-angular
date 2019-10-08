import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DeviceMetricCategoryEnum } from './R5_DeviceMetricCategoryEnum'
import { R5_DeviceMetricColorEnum } from './R5_DeviceMetricColorEnum'
import { R5_DeviceMetricOperationalStatusEnum } from './R5_DeviceMetricOperationalStatusEnum'
import { R5_DeviceMetric_Calibration } from './R5_DeviceMetric_Calibration'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'

export class R5_DeviceMetric      extends R5_DomainResource
{

   static def : string = 'DeviceMetric';
   identifier : R5_Identifier [];
   type : R5_CodeableConcept ;
   unit : R5_CodeableConcept ;
   source : R5_Reference ;
   parent : R5_Reference ;
   operationalStatus : R5_DeviceMetricOperationalStatusEnum ;
   color : R5_DeviceMetricColorEnum ;
   category : R5_DeviceMetricCategoryEnum ;
   measurementPeriod : R5_Timing ;
   calibration : R5_DeviceMetric_Calibration [];
}
