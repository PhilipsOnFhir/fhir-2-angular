import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_Attachment      extends R5_Element
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
