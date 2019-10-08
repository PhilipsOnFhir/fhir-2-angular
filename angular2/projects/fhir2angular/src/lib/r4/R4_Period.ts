import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_Period      extends R4_Element
{

   static def : string = 'Period';
   start : string ;
   end : string ;
}
