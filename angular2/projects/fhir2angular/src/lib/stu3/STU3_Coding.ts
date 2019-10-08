import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_Coding      extends STU3_Element
{

   static def : string = 'Coding';
   system : string ;
   version : string ;
   code : string ;
   display : string ;
   userSelected : boolean ;
}
