import { R4_AddressTypeEnum } from './R4_AddressTypeEnum'
import { R4_AddressUseEnum } from './R4_AddressUseEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Period } from './R4_Period'

export class R4_Address      extends R4_Element
{

   static def : string = 'Address';
   use : R4_AddressUseEnum ;
   type : R4_AddressTypeEnum ;
   text : string ;
   line : string [];
   city : string ;
   district : string ;
   state : string ;
   postalCode : string ;
   country : string ;
   period : R4_Period ;
}
