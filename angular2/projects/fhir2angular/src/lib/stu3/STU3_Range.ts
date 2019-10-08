import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Quantity } from './STU3_Quantity'

export class STU3_Range      extends STU3_Element
{

   static def : string = 'Range';
   low : STU3_Quantity ;
   high : STU3_Quantity ;
}
