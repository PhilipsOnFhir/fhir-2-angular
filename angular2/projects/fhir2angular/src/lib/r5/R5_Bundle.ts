import { R5_BundleTypeEnum } from './R5_BundleTypeEnum'
import { R5_Bundle_Entry } from './R5_Bundle_Entry'
import { R5_Bundle_Link } from './R5_Bundle_Link'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Resource } from './R5_Resource'
import { R5_Signature } from './R5_Signature'

export class R5_Bundle      extends R5_DomainResource
{

   static def : string = 'Bundle';
   identifier : R5_Identifier ;
   type : R5_BundleTypeEnum ;
   timestamp : string ;
   total : string ;
   link : R5_Bundle_Link [];
   entry : R5_Bundle_Entry [];
   signature : R5_Signature ;
}
