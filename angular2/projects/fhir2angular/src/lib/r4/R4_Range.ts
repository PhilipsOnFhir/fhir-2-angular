import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Quantity } from './R4_Quantity'

export class R4_Range      extends R4_Element
{

   static def : string = 'Range';
   low : R4_Quantity ;
   high : R4_Quantity ;
}
