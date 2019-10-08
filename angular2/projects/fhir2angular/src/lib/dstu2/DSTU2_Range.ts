import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_Range      extends DSTU2_Element
{

   static def : string = 'Range';
   low : DSTU2_SimpleQuantity ;
   high : DSTU2_SimpleQuantity ;
}
