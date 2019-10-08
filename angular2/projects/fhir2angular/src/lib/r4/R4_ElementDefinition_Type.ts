import { R4_AggregationModeEnum } from './R4_AggregationModeEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ReferenceVersionRulesEnum } from './R4_ReferenceVersionRulesEnum'

export class R4_ElementDefinition_Type      extends R4_BackboneElement
{

   static def : string = 'ElementDefinition_Type';
   code : string ;
   profile : string [];
   targetProfile : string [];
   aggregation : R4_AggregationModeEnum [];
   versioning : R4_ReferenceVersionRulesEnum ;
}
