import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_Money      extends R5_Element
{

   static def : string = 'Money';
   value : string ;
   currency : string ;
}
