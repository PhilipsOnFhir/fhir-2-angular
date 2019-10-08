import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Meta } from './DSTU2_Meta'

export class DSTU2_Resource{

   static def : string = 'Resource';
   id : string ;
   meta : DSTU2_Meta ;
   implicitRules : string ;
   language : string ;
   resourceType : string ;
}
