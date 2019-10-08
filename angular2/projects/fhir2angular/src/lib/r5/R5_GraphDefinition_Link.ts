import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GraphDefinition_Target } from './R5_GraphDefinition_Target'

export class R5_GraphDefinition_Link      extends R5_BackboneElement
{

   static def : string = 'GraphDefinition_Link';
   path : string ;
   sliceName : string ;
   min : string ;
   max : string ;
   description : string ;
   target : R5_GraphDefinition_Target [];
}
