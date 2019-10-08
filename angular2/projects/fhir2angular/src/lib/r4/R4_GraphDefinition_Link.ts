import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GraphDefinition_Target } from './R4_GraphDefinition_Target'

export class R4_GraphDefinition_Link      extends R4_BackboneElement
{

   static def : string = 'GraphDefinition_Link';
   path : string ;
   sliceName : string ;
   min : string ;
   max : string ;
   description : string ;
   target : R4_GraphDefinition_Target [];
}
