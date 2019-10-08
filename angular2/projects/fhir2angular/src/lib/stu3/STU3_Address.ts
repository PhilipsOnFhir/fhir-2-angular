import { STU3_AddressTypeEnum } from './STU3_AddressTypeEnum'
import { STU3_AddressUseEnum } from './STU3_AddressUseEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Period } from './STU3_Period'

export class STU3_Address      extends STU3_Element
{

   static def : string = 'Address';
   use : STU3_AddressUseEnum ;
   type : STU3_AddressTypeEnum ;
   text : string ;
   line : string [];
   city : string ;
   district : string ;
   state : string ;
   postalCode : string ;
   country : string ;
   period : STU3_Period ;
}
