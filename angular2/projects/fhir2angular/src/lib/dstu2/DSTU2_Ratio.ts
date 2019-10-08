import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Quantity } from './DSTU2_Quantity'

export class DSTU2_Ratio      extends DSTU2_Element
{

   static def : string = 'Ratio';
   numerator : DSTU2_Quantity ;
   denominator : DSTU2_Quantity ;
}
