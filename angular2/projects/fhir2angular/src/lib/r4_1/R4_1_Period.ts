import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_Period      extends R4_1_Element
{

   static def : string = 'Period';
   start : string ;
   end : string ;
}
