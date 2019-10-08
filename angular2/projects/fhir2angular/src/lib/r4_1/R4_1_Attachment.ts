import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_Attachment      extends R4_1_Element
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
