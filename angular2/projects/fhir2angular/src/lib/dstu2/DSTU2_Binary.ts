import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Resource } from './DSTU2_Resource'

export class DSTU2_Binary      extends DSTU2_Resource
{

   static def : string = 'Binary';
   contentType : string ;
   content : string ;
}
