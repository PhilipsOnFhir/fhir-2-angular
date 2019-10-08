import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_UDIEntryTypeEnum } from './R4_UDIEntryTypeEnum'

export class R4_Device_UdiCarrier      extends R4_BackboneElement
{

   static def : string = 'Device_UdiCarrier';
   deviceIdentifier : string ;
   issuer : string ;
   jurisdiction : string ;
   carrierAIDC : string ;
   carrierHRF : string ;
   entryType : R4_UDIEntryTypeEnum ;
}
