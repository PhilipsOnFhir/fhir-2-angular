import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DeviceNameTypeEnum } from './R4_DeviceNameTypeEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_DeviceDefinition_DeviceName      extends R4_BackboneElement
{

   static def : string = 'DeviceDefinition_DeviceName';
   name : string ;
   type : R4_DeviceNameTypeEnum ;
}
