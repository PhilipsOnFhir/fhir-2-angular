import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_DeviceDefinition_UdiDeviceIdentifier      extends R4_BackboneElement
{

   static def : string = 'DeviceDefinition_UdiDeviceIdentifier';
   deviceIdentifier : string ;
   issuer : string ;
   jurisdiction : string ;
}
