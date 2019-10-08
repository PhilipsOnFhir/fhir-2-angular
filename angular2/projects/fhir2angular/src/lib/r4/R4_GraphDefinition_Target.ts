import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GraphDefinition_Compartment } from './R4_GraphDefinition_Compartment'
import { R4_GraphDefinition_Link } from './R4_GraphDefinition_Link'

export class R4_GraphDefinition_Target      extends R4_BackboneElement
{

   static def : string = 'GraphDefinition_Target';
   type : string ;
   params : string ;
   profile : string ;
   compartment : R4_GraphDefinition_Compartment [];
   link : R4_GraphDefinition_Link [];
}
