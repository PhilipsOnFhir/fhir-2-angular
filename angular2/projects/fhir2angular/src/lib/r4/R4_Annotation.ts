import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_Reference } from './R4_Reference'

export class R4_Annotation      extends R4_Element
{

   static def : string = 'Annotation';
   authorReference : R4_Reference ;
   authorString : string ;
   time : string ;
   text : string ;
}
