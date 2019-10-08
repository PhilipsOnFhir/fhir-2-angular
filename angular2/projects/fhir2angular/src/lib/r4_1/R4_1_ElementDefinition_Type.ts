import { R4_1_AggregationModeEnum } from './R4_1_AggregationModeEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ReferenceVersionRulesEnum } from './R4_1_ReferenceVersionRulesEnum'

export class R4_1_ElementDefinition_Type      extends R4_1_BackboneElement
{

   static def : string = 'ElementDefinition_Type';
   code : string ;
   profile : string [];
   targetProfile : string [];
   aggregation : R4_1_AggregationModeEnum [];
   versioning : R4_1_ReferenceVersionRulesEnum ;
}
