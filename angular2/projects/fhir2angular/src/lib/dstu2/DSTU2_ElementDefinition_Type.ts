import { DSTU2_AggregationModeEnum } from './DSTU2_AggregationModeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_ElementDefinition_Type      extends DSTU2_Element
{

   static def : string = 'ElementDefinition_Type';
   code : string ;
   profile : string [];
   aggregation : DSTU2_AggregationModeEnum [];
}
