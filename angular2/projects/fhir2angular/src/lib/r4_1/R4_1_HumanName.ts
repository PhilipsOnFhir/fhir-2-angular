import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_NameUseEnum } from './R4_1_NameUseEnum'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_HumanName      extends R4_1_Element
{

   static def : string = 'HumanName';
   use : R4_1_NameUseEnum ;
   text : string ;
   family : string ;
   given : string [];
   prefix : string [];
   suffix : string [];
   period : R4_1_Period ;
}
