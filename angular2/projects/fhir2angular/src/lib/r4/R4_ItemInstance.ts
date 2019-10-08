import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_ItemInstance      extends R4_DomainResource
{

   static def : string = 'ItemInstance';
   count : string ;
   location : R4_Reference ;
   subject : R4_Reference ;
   manufactureDate : string ;
   expiryDate : string ;
   currentSWVersion : string ;
   lotNumber : string ;
   serialNumber : string ;
   carrierAIDC : string ;
   carrierHRF : string ;
}
