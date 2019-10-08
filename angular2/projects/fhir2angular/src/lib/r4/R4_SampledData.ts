import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Quantity } from './R4_Quantity'

export class R4_SampledData      extends R4_Element
{

   static def : string = 'SampledData';
   origin : R4_Quantity ;
   period : string ;
   factor : string ;
   lowerLimit : string ;
   upperLimit : string ;
   dimensions : string ;
   data : string ;
}
