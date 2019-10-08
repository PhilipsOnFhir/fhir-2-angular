import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Quantity } from './STU3_Quantity'

export class STU3_SampledData      extends STU3_Element
{

   static def : string = 'SampledData';
   origin : STU3_Quantity ;
   period : string ;
   factor : string ;
   lowerLimit : string ;
   upperLimit : string ;
   dimensions : string ;
   data : string ;
}
