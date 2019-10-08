import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DeviceNameTypeEnum } from './R4_1_DeviceNameTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Device_DeviceName      extends R4_1_BackboneElement
{

   static def : string = 'Device_DeviceName';
   name : string ;
   type : R4_1_DeviceNameTypeEnum ;
}
