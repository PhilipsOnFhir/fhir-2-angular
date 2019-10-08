import { R4_BundleTypeEnum } from './R4_BundleTypeEnum'
import { R4_Bundle_Entry } from './R4_Bundle_Entry'
import { R4_Bundle_Link } from './R4_Bundle_Link'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Resource } from './R4_Resource'
import { R4_Signature } from './R4_Signature'

export class R4_Bundle      extends R4_DomainResource
{

   static def : string = 'Bundle';
   identifier : R4_Identifier ;
   type : R4_BundleTypeEnum ;
   timestamp : string ;
   total : string ;
   link : R4_Bundle_Link [];
   entry : R4_Bundle_Entry [];
   signature : R4_Signature ;
}
