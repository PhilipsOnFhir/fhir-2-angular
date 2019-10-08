import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Reference } from './R5_Reference'

export class R5_Signature      extends R5_Element
{

   static def : string = 'Signature';
   type : R5_Coding [];
   when : string ;
   who : R5_Reference ;
   onBehalfOf : R5_Reference ;
   targetFormat : string ;
   sigFormat : string ;
   data : string ;
}
