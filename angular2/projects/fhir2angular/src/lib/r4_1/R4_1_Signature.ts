import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Signature      extends R4_1_Element
{

   static def : string = 'Signature';
   type : R4_1_Coding [];
   when : string ;
   who : R4_1_Reference ;
   onBehalfOf : R4_1_Reference ;
   targetFormat : string ;
   sigFormat : string ;
   data : string ;
}
