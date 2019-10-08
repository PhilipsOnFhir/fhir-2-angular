import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Quantity } from './R5_Quantity'

export class R5_Ratio      extends R5_Element
{

   static def : string = 'Ratio';
   numerator : R5_Quantity ;
   denominator : R5_Quantity ;
}
