import { R5_AddressTypeEnum } from './R5_AddressTypeEnum'
import { R5_AddressUseEnum } from './R5_AddressUseEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Period } from './R5_Period'

export class R5_Address      extends R5_Element
{

   static def : string = 'Address';
   use : R5_AddressUseEnum ;
   type : R5_AddressTypeEnum ;
   text : string ;
   line : string [];
   city : string ;
   district : string ;
   state : string ;
   postalCode : string ;
   country : string ;
   period : R5_Period ;
}
