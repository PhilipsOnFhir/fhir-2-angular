import { R4_1_AddressTypeEnum } from './R4_1_AddressTypeEnum'
import { R4_1_AddressUseEnum } from './R4_1_AddressUseEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_Address      extends R4_1_Element
{

   static def : string = 'Address';
   use : R4_1_AddressUseEnum ;
   type : R4_1_AddressTypeEnum ;
   text : string ;
   line : string [];
   city : string ;
   district : string ;
   state : string ;
   postalCode : string ;
   country : string ;
   period : R4_1_Period ;
}
