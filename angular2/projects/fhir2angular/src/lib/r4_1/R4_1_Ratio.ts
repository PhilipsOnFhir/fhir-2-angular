import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_Ratio      extends R4_1_Element
{

   static def : string = 'Ratio';
   numerator : R4_1_Quantity ;
   denominator : R4_1_Quantity ;
}
