import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Annotation      extends DSTU2_Element
{

   static def : string = 'Annotation';
   authorReference : DSTU2_Reference ;
   authorString : string ;
   time : string ;
   text : string ;
}
