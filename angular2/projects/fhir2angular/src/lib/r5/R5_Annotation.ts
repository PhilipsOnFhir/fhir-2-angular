import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_Reference } from './R5_Reference'

export class R5_Annotation      extends R5_Element
{

   static def : string = 'Annotation';
   authorReference : R5_Reference ;
   authorString : string ;
   time : string ;
   text : string ;
}
