import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_Coding      extends DSTU2_Element
{

   static def : string = 'Coding';
   system : string ;
   version : string ;
   code : string ;
   display : string ;
   userSelected : boolean ;
}
