import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_PlanDefinition_DynamicValue      extends STU3_BackboneElement
{

   static def : string = 'PlanDefinition_DynamicValue';
   description : string ;
   path : string ;
   language : string ;
   expression : string ;
}
