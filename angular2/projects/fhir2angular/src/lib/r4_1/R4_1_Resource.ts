import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Meta } from './R4_1_Meta'

export class R4_1_Resource{

   static def : string = 'Resource';
   id : string ;
   meta : R4_1_Meta ;
   implicitRules : string ;
   language : string ;
   resourceType : string ;
}
