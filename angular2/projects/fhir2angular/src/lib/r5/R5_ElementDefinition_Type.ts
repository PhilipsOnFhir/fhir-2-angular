import { R5_AggregationModeEnum } from './R5_AggregationModeEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ReferenceVersionRulesEnum } from './R5_ReferenceVersionRulesEnum'

export class R5_ElementDefinition_Type      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition_Type';
   code : string ;
   profile : string [];
   targetProfile : string [];
   aggregation : R5_AggregationModeEnum [];
   versioning : R5_ReferenceVersionRulesEnum ;
}
