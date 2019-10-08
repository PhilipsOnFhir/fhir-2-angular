import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DeviceMetricCalibrationStateEnum } from './R4_1_DeviceMetricCalibrationStateEnum'
import { R4_1_DeviceMetricCalibrationTypeEnum } from './R4_1_DeviceMetricCalibrationTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_DeviceMetric_Calibration      extends R4_1_BackboneElement
{

   static def : string = 'DeviceMetric_Calibration';
   type : R4_1_DeviceMetricCalibrationTypeEnum ;
   state : R4_1_DeviceMetricCalibrationStateEnum ;
   time : string ;
}
