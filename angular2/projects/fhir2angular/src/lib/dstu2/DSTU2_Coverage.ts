import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Coverage      extends DSTU2_DomainResource
{

   static def : string = 'Coverage';
   issuer : DSTU2_Reference ;
   bin : DSTU2_Identifier ;
   period : DSTU2_Period ;
   type : DSTU2_Coding ;
   subscriberId : DSTU2_Identifier ;
   identifier : DSTU2_Identifier [];
   group : string ;
   plan : string ;
   subPlan : string ;
   dependent : string ;
   sequence : string ;
   subscriber : DSTU2_Reference ;
   network : DSTU2_Identifier ;
   contract : DSTU2_Reference [];
}
