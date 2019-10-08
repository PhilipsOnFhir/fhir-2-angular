import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_Money      extends R4_Element
{

   static def : string = 'Money';
   value : string ;
   currency : string ;
}
