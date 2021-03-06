import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_DeviceDefinition_UdiDeviceIdentifier      extends R4_1_BackboneElement
{

   static def : string = 'DeviceDefinition_UdiDeviceIdentifier';
   deviceIdentifier : string ;
   issuer : string ;
   jurisdiction : string ;
}
