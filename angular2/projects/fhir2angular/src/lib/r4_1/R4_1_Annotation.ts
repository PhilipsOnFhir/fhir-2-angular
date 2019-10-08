import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Annotation      extends R4_1_Element
{

   static def : string = 'Annotation';
   authorReference : R4_1_Reference ;
   authorString : string ;
   time : string ;
   text : string ;
}
