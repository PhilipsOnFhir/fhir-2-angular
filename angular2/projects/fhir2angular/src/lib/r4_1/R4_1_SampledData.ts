import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_SampledData      extends R4_1_Element
{

   static def : string = 'SampledData';
   origin : R4_1_Quantity ;
   period : string ;
   factor : string ;
   lowerLimit : string ;
   upperLimit : string ;
   dimensions : string ;
   data : string ;
}
