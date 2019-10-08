import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ItemInstance      extends R4_1_DomainResource
{

   static def : string = 'ItemInstance';
   count : string ;
   location : R4_1_Reference ;
   subject : R4_1_Reference ;
   manufactureDate : string ;
   expiryDate : string ;
   currentSWVersion : string ;
   lotNumber : string ;
   serialNumber : string ;
   carrierAIDC : string ;
   carrierHRF : string ;
}
