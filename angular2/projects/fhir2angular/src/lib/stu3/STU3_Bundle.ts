import { STU3_BundleTypeEnum } from './STU3_BundleTypeEnum'
import { STU3_Bundle_Entry } from './STU3_Bundle_Entry'
import { STU3_Bundle_Link } from './STU3_Bundle_Link'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Resource } from './STU3_Resource'
import { STU3_Signature } from './STU3_Signature'

export class STU3_Bundle      extends STU3_DomainResource
{

   static def : string = 'Bundle';
   identifier : STU3_Identifier ;
   type : STU3_BundleTypeEnum ;
   total : string ;
   link : STU3_Bundle_Link [];
   entry : STU3_Bundle_Entry [];
   signature : STU3_Signature ;
}
