import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DeviceNameTypeEnum } from './R5_DeviceNameTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Device_DeviceName      extends R5_BackboneElement
{

   static def : string = 'Device_DeviceName';
   name : string ;
   type : R5_DeviceNameTypeEnum ;
}
