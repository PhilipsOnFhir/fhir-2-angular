import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_GraphDefinition_Compartment } from './R4_1_GraphDefinition_Compartment'
import { R4_1_GraphDefinition_Link } from './R4_1_GraphDefinition_Link'

export class R4_1_GraphDefinition_Target      extends R4_1_BackboneElement
{

   static def : string = 'GraphDefinition_Target';
   type : string ;
   params : string ;
   profile : string ;
   compartment : R4_1_GraphDefinition_Compartment [];
   link : R4_1_GraphDefinition_Link [];
}
