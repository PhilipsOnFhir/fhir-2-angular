import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_NameUseEnum } from './R5_NameUseEnum'
import { R5_Period } from './R5_Period'

export class R5_HumanName      extends R5_Element
{

   static def : string = 'HumanName';
   use : R5_NameUseEnum ;
   text : string ;
   family : string ;
   given : string [];
   prefix : string [];
   suffix : string [];
   period : R5_Period ;
}
