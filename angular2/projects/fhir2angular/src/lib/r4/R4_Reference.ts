import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Identifier } from './R4_Identifier'

export class R4_Reference      extends R4_Element
{

   static def : string = 'Reference';
   reference : string ;
   type : string ;
   identifier : R4_Identifier ;
   display : string ;
}
