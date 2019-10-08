import { DSTU2_AddressTypeEnum } from './DSTU2_AddressTypeEnum'
import { DSTU2_AddressUseEnum } from './DSTU2_AddressUseEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Period } from './DSTU2_Period'

export class DSTU2_Address      extends DSTU2_Element
{

   static def : string = 'Address';
   use : DSTU2_AddressUseEnum ;
   type : DSTU2_AddressTypeEnum ;
   text : string ;
   line : string [];
   city : string ;
   district : string ;
   state : string ;
   postalCode : string ;
   country : string ;
   period : DSTU2_Period ;
}
