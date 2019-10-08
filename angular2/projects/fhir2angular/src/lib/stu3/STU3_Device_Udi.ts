import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_UDIEntryTypeEnum } from './STU3_UDIEntryTypeEnum'

export class STU3_Device_Udi      extends STU3_BackboneElement
{

   static def : string = 'Device_Udi';
   deviceIdentifier : string ;
   name : string ;
   jurisdiction : string ;
   carrierHRF : string ;
   carrierAIDC : string ;
   issuer : string ;
   entryType : STU3_UDIEntryTypeEnum ;
}
