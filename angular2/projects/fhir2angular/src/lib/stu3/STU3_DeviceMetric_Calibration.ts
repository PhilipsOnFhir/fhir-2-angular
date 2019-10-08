import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DeviceMetricCalibrationStateEnum } from './STU3_DeviceMetricCalibrationStateEnum'
import { STU3_DeviceMetricCalibrationTypeEnum } from './STU3_DeviceMetricCalibrationTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_DeviceMetric_Calibration      extends STU3_BackboneElement
{

   static def : string = 'DeviceMetric_Calibration';
   type : STU3_DeviceMetricCalibrationTypeEnum ;
   state : STU3_DeviceMetricCalibrationStateEnum ;
   time : string ;
}
