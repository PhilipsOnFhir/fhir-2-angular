import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GraphDefinition_Target } from './R4_1_GraphDefinition_Target'

export class R4_1_GraphDefinition_Link      extends R4_1_BackboneElement
{

   static def : string = 'GraphDefinition_Link';
   path : string ;
   sliceName : string ;
   min : string ;
   max : string ;
   description : string ;
   target : R4_1_GraphDefinition_Target [];
}
