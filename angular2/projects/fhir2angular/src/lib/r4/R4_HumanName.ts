import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_NameUseEnum } from './R4_NameUseEnum'
import { R4_Period } from './R4_Period'

export class R4_HumanName      extends R4_Element
{

   static def : string = 'HumanName';
   use : R4_NameUseEnum ;
   text : string ;
   family : string ;
   given : string [];
   prefix : string [];
   suffix : string [];
   period : R4_Period ;
}
