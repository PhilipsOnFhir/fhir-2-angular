import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DeviceMetricCategoryEnum } from './R4_1_DeviceMetricCategoryEnum'
import { R4_1_DeviceMetricColorEnum } from './R4_1_DeviceMetricColorEnum'
import { R4_1_DeviceMetricOperationalStatusEnum } from './R4_1_DeviceMetricOperationalStatusEnum'
import { R4_1_DeviceMetric_Calibration } from './R4_1_DeviceMetric_Calibration'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_DeviceMetric      extends R4_1_DomainResource
{

   static def : string = 'DeviceMetric';
   identifier : R4_1_Identifier [];
   type : R4_1_CodeableConcept ;
   unit : R4_1_CodeableConcept ;
   source : R4_1_Reference ;
   parent : R4_1_Reference ;
   operationalStatus : R4_1_DeviceMetricOperationalStatusEnum ;
   color : R4_1_DeviceMetricColorEnum ;
   category : R4_1_DeviceMetricCategoryEnum ;
   measurementPeriod : R4_1_Timing ;
   calibration : R4_1_DeviceMetric_Calibration [];
}
