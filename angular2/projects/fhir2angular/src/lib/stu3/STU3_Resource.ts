import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Meta } from './STU3_Meta'

export class STU3_Resource{

   static def : string = 'Resource';
   id : string ;
   meta : STU3_Meta ;
   implicitRules : string ;
   language : string ;
   resourceType : string ;
}
