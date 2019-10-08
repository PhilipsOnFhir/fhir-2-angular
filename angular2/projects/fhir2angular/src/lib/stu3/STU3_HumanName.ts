import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_NameUseEnum } from './STU3_NameUseEnum'
import { STU3_Period } from './STU3_Period'

export class STU3_HumanName      extends STU3_Element
{

   static def : string = 'HumanName';
   use : STU3_NameUseEnum ;
   text : string ;
   family : string ;
   given : string [];
   prefix : string [];
   suffix : string [];
   period : STU3_Period ;
}
