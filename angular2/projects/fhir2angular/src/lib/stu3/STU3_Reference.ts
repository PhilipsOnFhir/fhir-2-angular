import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_Reference      extends STU3_Element
{

   static def : string = 'Reference';
   reference : string ;
   identifier : STU3_Identifier ;
   display : string ;
}
