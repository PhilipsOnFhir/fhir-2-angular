import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ModuleDefinition_ValueSet      extends STU3_BackboneElement
{

   static def : string = 'ModuleDefinition_ValueSet';
   name : string ;
   identifier : string ;
   version : string ;
   codeSystem : string [];
}
