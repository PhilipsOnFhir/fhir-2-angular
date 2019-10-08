import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_Attachment      extends DSTU2_Element
{

   static def : string = 'Attachment';
   contentType : string ;
   language : string ;
   data : string ;
   url : string ;
   size : string ;
   hash : string ;
   title : string ;
   creation : string ;
}
