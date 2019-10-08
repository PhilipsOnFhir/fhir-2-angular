import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_UDIEntryTypeEnum } from './R4_1_UDIEntryTypeEnum'

export class R4_1_Device_UdiCarrier      extends R4_1_BackboneElement
{

   static def : string = 'Device_UdiCarrier';
   deviceIdentifier : string ;
   issuer : string ;
   jurisdiction : string ;
   carrierAIDC : string ;
   carrierHRF : string ;
   entryType : R4_1_UDIEntryTypeEnum ;
}
