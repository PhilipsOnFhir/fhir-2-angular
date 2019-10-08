import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_Resource } from './R4_Resource'

export class R4_Binary      extends R4_Resource
{

   static def : string = 'Binary';
   contentType : string ;
   securityContext : R4_Reference ;
   data : string ;
}
