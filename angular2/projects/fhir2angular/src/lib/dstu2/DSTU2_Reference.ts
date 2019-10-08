import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_Reference      extends DSTU2_Element
{

   static def : string = 'Reference';
   reference : string ;
   display : string ;
}
