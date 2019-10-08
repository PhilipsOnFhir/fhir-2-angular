import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_Resource } from './R5_Resource'

export class R5_Binary      extends R5_Resource
{

   static def : string = 'Binary';
   contentType : string ;
   securityContext : R5_Reference ;
   data : string ;
}
