import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Expression } from './R5_Expression'

export class R5_ActivityDefinition_DynamicValue      extends R5_BackboneElement
{

   static def : string = 'ActivityDefinition_DynamicValue';
   path : string ;
   expression : R5_Expression ;
}
