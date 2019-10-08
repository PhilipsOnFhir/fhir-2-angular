import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_Period      extends R5_Element
{

   static def : string = 'Period';
   start : string ;
   end : string ;
}
