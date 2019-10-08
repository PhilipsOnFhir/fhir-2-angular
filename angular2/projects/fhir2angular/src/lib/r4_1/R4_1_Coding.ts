import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_Coding      extends R4_1_Element
{

   static def : string = 'Coding';
   system : string ;
   version : string ;
   code : string ;
   display : string ;
   userSelected : boolean ;
}
