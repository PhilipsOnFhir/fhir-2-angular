import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Reference } from './R4_Reference'

export class R4_Signature      extends R4_Element
{

   static def : string = 'Signature';
   type : R4_Coding [];
   when : string ;
   who : R4_Reference ;
   onBehalfOf : R4_Reference ;
   targetFormat : string ;
   sigFormat : string ;
   data : string ;
}
