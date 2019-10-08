import { R5_DomainResource } from './R5_DomainResource'
import { R5_Meta } from './R5_Meta'

export class R5_Resource{

   static def : string = 'Resource';
   id : string ;
   meta : R5_Meta ;
   implicitRules : string ;
   language : string ;
   resourceType : string ;
}
