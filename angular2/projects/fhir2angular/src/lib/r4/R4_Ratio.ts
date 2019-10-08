import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Quantity } from './R4_Quantity'

export class R4_Ratio      extends R4_Element
{

   static def : string = 'Ratio';
   numerator : R4_Quantity ;
   denominator : R4_Quantity ;
}
