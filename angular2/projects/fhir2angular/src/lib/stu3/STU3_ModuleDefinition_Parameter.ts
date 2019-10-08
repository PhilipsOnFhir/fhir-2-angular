import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ModuleDefinition_Parameter      extends STU3_BackboneElement
{

   static def : string = 'ModuleDefinition_Parameter';
   name : string ;
   use : string ;
   documentation : string ;
   type : string ;
   profile : STU3_Reference ;
}
