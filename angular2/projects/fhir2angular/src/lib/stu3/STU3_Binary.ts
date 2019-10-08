import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Resource } from './STU3_Resource'

export class STU3_Binary      extends STU3_Resource
{

   static def : string = 'Binary';
   contentType : string ;
   securityContext : STU3_Reference ;
   content : string ;
}
