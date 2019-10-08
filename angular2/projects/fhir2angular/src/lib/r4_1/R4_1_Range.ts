import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_Range      extends R4_1_Element
{

   static def : string = 'Range';
   low : R4_1_Quantity ;
   high : R4_1_Quantity ;
}
