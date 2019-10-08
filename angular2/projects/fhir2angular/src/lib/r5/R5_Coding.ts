import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_Coding      extends R5_Element
{

   static def : string = 'Coding';
   system : string ;
   version : string ;
   code : string ;
   display : string ;
   userSelected : boolean ;
}
