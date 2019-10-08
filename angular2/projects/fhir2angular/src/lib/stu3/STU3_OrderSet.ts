import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ModuleMetadata } from './STU3_ModuleMetadata'
import { STU3_Reference } from './STU3_Reference'

export class STU3_OrderSet      extends STU3_DomainResource
{

   static def : string = 'OrderSet';
   moduleMetadata : STU3_ModuleMetadata ;
   library : STU3_Reference [];
   action : string [];
}
