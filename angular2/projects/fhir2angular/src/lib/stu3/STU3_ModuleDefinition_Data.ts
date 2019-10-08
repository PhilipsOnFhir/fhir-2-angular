import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ModuleDefinition_CodeFilter } from './STU3_ModuleDefinition_CodeFilter'
import { STU3_ModuleDefinition_DateFilter } from './STU3_ModuleDefinition_DateFilter'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ModuleDefinition_Data      extends STU3_BackboneElement
{

   static def : string = 'ModuleDefinition_Data';
   type : string ;
   profile : STU3_Reference ;
   mustSupport : string [];
   codeFilter : STU3_ModuleDefinition_CodeFilter [];
   dateFilter : STU3_ModuleDefinition_DateFilter [];
}
