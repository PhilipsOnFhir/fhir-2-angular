import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Annotation      extends STU3_Element
{

   static def : string = 'Annotation';
   authorReference : STU3_Reference ;
   authorString : string ;
   time : string ;
   text : string ;
}
