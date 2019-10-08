import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DeviceMetricCategoryEnum } from './STU3_DeviceMetricCategoryEnum'
import { STU3_DeviceMetricColorEnum } from './STU3_DeviceMetricColorEnum'
import { STU3_DeviceMetricOperationalStatusEnum } from './STU3_DeviceMetricOperationalStatusEnum'
import { STU3_DeviceMetric_Calibration } from './STU3_DeviceMetric_Calibration'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Timing } from './STU3_Timing'

export class STU3_DeviceMetric      extends STU3_DomainResource
{

   static def : string = 'DeviceMetric';
   identifier : STU3_Identifier ;
   type : STU3_CodeableConcept ;
   unit : STU3_CodeableConcept ;
   source : STU3_Reference ;
   parent : STU3_Reference ;
   operationalStatus : STU3_DeviceMetricOperationalStatusEnum ;
   color : STU3_DeviceMetricColorEnum ;
   category : STU3_DeviceMetricCategoryEnum ;
   measurementPeriod : STU3_Timing ;
   calibration : STU3_DeviceMetric_Calibration [];
}
