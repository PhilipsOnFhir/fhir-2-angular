import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_NameUseEnum } from './DSTU2_NameUseEnum'
import { DSTU2_Period } from './DSTU2_Period'

export class DSTU2_HumanName      extends DSTU2_Element
{

   static def : string = 'HumanName';
   use : DSTU2_NameUseEnum ;
   text : string ;
   family : string [];
   given : string [];
   prefix : string [];
   suffix : string [];
   period : DSTU2_Period ;
}
