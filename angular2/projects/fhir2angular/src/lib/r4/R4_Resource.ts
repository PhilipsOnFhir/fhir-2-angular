import { R4_DomainResource } from './R4_DomainResource'
import { R4_Meta } from './R4_Meta'

export class R4_Resource{

   static def : string = 'Resource';
   id : string ;
   meta : R4_Meta ;
   implicitRules : string ;
   language : string ;
   resourceType : string ;
}
