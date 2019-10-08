import { R4_1_BundleTypeEnum } from './R4_1_BundleTypeEnum'
import { R4_1_Bundle_Entry } from './R4_1_Bundle_Entry'
import { R4_1_Bundle_Link } from './R4_1_Bundle_Link'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Resource } from './R4_1_Resource'
import { R4_1_Signature } from './R4_1_Signature'

export class R4_1_Bundle      extends R4_1_DomainResource
{

   static def : string = 'Bundle';
   identifier : R4_1_Identifier ;
   type : R4_1_BundleTypeEnum ;
   timestamp : string ;
   total : string ;
   link : R4_1_Bundle_Link [];
   entry : R4_1_Bundle_Entry [];
   signature : R4_1_Signature ;
}
