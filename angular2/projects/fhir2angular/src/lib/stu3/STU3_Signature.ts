import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Signature      extends STU3_Element
{

   static def : string = 'Signature';
   type : STU3_Coding [];
   when : string ;
   whoUri : string ;
   whoReference : STU3_Reference ;
   onBehalfOfUri : string ;
   onBehalfOfReference : STU3_Reference ;
   contentType : string ;
   blob : string ;
}
