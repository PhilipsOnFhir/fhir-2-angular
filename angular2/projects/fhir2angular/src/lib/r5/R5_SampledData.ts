import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Quantity } from './R5_Quantity'

export class R5_SampledData      extends R5_Element
{

   static def : string = 'SampledData';
   origin : R5_Quantity ;
   period : string ;
   factor : string ;
   lowerLimit : string ;
   upperLimit : string ;
   dimensions : string ;
   data : string ;
}
