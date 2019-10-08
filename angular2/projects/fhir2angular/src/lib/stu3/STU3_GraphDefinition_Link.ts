import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GraphDefinition_Target } from './STU3_GraphDefinition_Target'

export class STU3_GraphDefinition_Link      extends STU3_BackboneElement
{

   static def : string = 'GraphDefinition_Link';
   path : string ;
   sliceName : string ;
   min : string ;
   max : string ;
   description : string ;
   target : STU3_GraphDefinition_Target [];
}
