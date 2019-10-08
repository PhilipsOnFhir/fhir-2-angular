import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ItemInstance      extends R5_DomainResource
{

   static def : string = 'ItemInstance';
   count : string ;
   location : R5_Reference ;
   subject : R5_Reference ;
   manufactureDate : string ;
   expiryDate : string ;
   currentSWVersion : string ;
   lotNumber : string ;
   serialNumber : string ;
   carrierAIDC : string ;
   carrierHRF : string ;
}
