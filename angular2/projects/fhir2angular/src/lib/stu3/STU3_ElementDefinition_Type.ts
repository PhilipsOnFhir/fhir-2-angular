import { STU3_AggregationModeEnum } from './STU3_AggregationModeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_ReferenceVersionRulesEnum } from './STU3_ReferenceVersionRulesEnum'

export class STU3_ElementDefinition_Type      extends STU3_Element
{

   static def : string = 'ElementDefinition_Type';
   code : string ;
   profile : string ;
   targetProfile : string ;
   aggregation : STU3_AggregationModeEnum [];
   versioning : STU3_ReferenceVersionRulesEnum ;
}
