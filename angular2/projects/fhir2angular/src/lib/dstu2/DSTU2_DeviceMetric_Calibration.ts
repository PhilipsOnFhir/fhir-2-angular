import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DeviceMetricCalibrationStateEnum } from './DSTU2_DeviceMetricCalibrationStateEnum'
import { DSTU2_DeviceMetricCalibrationTypeEnum } from './DSTU2_DeviceMetricCalibrationTypeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_DeviceMetric_Calibration      extends DSTU2_BackboneElement
{

   static def : string = 'DeviceMetric_Calibration';
   type : DSTU2_DeviceMetricCalibrationTypeEnum ;
   state : DSTU2_DeviceMetricCalibrationStateEnum ;
   time : string ;
}
