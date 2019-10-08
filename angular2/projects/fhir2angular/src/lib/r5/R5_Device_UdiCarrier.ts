import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_UDIEntryTypeEnum } from './R5_UDIEntryTypeEnum'

export class R5_Device_UdiCarrier      extends R5_BackboneElement
{

   static def : string = 'Device_UdiCarrier';
   deviceIdentifier : string ;
   issuer : string ;
   jurisdiction : string ;
   carrierAIDC : string ;
   carrierHRF : string ;
   entryType : R5_UDIEntryTypeEnum ;
}
