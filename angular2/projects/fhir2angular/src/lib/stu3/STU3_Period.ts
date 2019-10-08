import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_Period      extends STU3_Element
{

   static def : string = 'Period';
   start : string ;
   end : string ;
}
