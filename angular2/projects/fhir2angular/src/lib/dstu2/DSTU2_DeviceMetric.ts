import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DeviceMetricCategoryEnum } from './DSTU2_DeviceMetricCategoryEnum'
import { DSTU2_DeviceMetricColorEnum } from './DSTU2_DeviceMetricColorEnum'
import { DSTU2_DeviceMetricOperationalStatusEnum } from './DSTU2_DeviceMetricOperationalStatusEnum'
import { DSTU2_DeviceMetric_Calibration } from './DSTU2_DeviceMetric_Calibration'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_DeviceMetric      extends DSTU2_DomainResource
{

   static def : string = 'DeviceMetric';
   type : DSTU2_CodeableConcept ;
   identifier : DSTU2_Identifier ;
   unit : DSTU2_CodeableConcept ;
   source : DSTU2_Reference ;
   parent : DSTU2_Reference ;
   operationalStatus : DSTU2_DeviceMetricOperationalStatusEnum ;
   color : DSTU2_DeviceMetricColorEnum ;
   category : DSTU2_DeviceMetricCategoryEnum ;
   measurementPeriod : DSTU2_Timing ;
   calibration : DSTU2_DeviceMetric_Calibration [];
}
