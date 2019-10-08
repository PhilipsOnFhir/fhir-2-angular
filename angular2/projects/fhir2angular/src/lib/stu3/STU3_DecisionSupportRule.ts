import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ModuleMetadata } from './STU3_ModuleMetadata'
import { STU3_Reference } from './STU3_Reference'
import { STU3_TriggerDefinition } from './STU3_TriggerDefinition'

export class STU3_DecisionSupportRule      extends STU3_DomainResource
{

   static def : string = 'DecisionSupportRule';
   moduleMetadata : STU3_ModuleMetadata ;
   library : STU3_Reference [];
   trigger : STU3_TriggerDefinition [];
   condition : string ;
   action : string [];
}
