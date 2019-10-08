import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Expression } from './R4_Expression'

export class R4_PlanDefinition_DynamicValue      extends R4_BackboneElement
{

   static def : string = 'PlanDefinition_DynamicValue';
   path : string ;
   expression : R4_Expression ;
}
