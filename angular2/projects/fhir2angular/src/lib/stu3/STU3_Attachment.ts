import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_Attachment      extends STU3_Element
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
