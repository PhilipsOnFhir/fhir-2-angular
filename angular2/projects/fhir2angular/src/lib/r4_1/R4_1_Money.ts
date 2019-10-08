import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_Money      extends R4_1_Element
{

   static def : string = 'Money';
   value : string ;
   currency : string ;
}
