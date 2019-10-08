import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DeviceMetricCalibrationStateEnum } from './R4_DeviceMetricCalibrationStateEnum'
import { R4_DeviceMetricCalibrationTypeEnum } from './R4_DeviceMetricCalibrationTypeEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_DeviceMetric_Calibration      extends R4_BackboneElement
{

   static def : string = 'DeviceMetric_Calibration';
   type : R4_DeviceMetricCalibrationTypeEnum ;
   state : R4_DeviceMetricCalibrationStateEnum ;
   time : string ;
}
