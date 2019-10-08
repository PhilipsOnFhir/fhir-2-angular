import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_SampledData      extends DSTU2_Element
{

   static def : string = 'SampledData';
   origin : DSTU2_SimpleQuantity ;
   period : string ;
   factor : string ;
   lowerLimit : string ;
   upperLimit : string ;
   dimensions : string ;
   data : string ;
}
