import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Identifier } from './R4_1_Identifier'

export class R4_1_Reference      extends R4_1_Element
{

   static def : string = 'Reference';
   reference : string ;
   type : string ;
   identifier : R4_1_Identifier ;
   display : string ;
}
