import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_Coding      extends R4_Element
{

   static def : string = 'Coding';
   system : string ;
   version : string ;
   code : string ;
   display : string ;
   userSelected : boolean ;
}
