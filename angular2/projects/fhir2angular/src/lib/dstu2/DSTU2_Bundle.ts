import { DSTU2_BundleTypeEnum } from './DSTU2_BundleTypeEnum'
import { DSTU2_Bundle_Entry } from './DSTU2_Bundle_Entry'
import { DSTU2_Bundle_Link } from './DSTU2_Bundle_Link'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Resource } from './DSTU2_Resource'
import { DSTU2_Signature } from './DSTU2_Signature'

export class DSTU2_Bundle      extends DSTU2_DomainResource
{

   static def : string = 'Bundle';
   type : DSTU2_BundleTypeEnum ;
   total : string ;
   link : DSTU2_Bundle_Link [];
   entry : DSTU2_Bundle_Entry [];
   signature : DSTU2_Signature ;
}
