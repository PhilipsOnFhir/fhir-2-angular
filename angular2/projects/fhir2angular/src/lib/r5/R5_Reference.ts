import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Identifier } from './R5_Identifier'

export class R5_Reference      extends R5_Element
{

   static def : string = 'Reference';
   reference : string ;
   type : string ;
   identifier : R5_Identifier ;
   display : string ;
}
