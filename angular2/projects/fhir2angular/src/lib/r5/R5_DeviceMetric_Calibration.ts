import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DeviceMetricCalibrationStateEnum } from './R5_DeviceMetricCalibrationStateEnum'
import { R5_DeviceMetricCalibrationTypeEnum } from './R5_DeviceMetricCalibrationTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_DeviceMetric_Calibration      extends R5_BackboneElement
{

   static def : string = 'DeviceMetric_Calibration';
   type : R5_DeviceMetricCalibrationTypeEnum ;
   state : R5_DeviceMetricCalibrationStateEnum ;
   time : string ;
}
