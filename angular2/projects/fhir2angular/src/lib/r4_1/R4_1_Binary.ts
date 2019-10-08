import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Resource } from './R4_1_Resource'

export class R4_1_Binary      extends R4_1_Resource
{

   static def : string = 'Binary';
   contentType : string ;
   securityContext : R4_1_Reference ;
   data : string ;
}
