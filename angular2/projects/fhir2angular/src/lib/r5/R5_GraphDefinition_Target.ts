import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GraphDefinition_Compartment } from './R5_GraphDefinition_Compartment'
import { R5_GraphDefinition_Link } from './R5_GraphDefinition_Link'

export class R5_GraphDefinition_Target      extends R5_BackboneElement
{

   static def : string = 'GraphDefinition_Target';
   type : string ;
   params : string ;
   profile : string ;
   compartment : R5_GraphDefinition_Compartment [];
   link : R5_GraphDefinition_Link [];
}
