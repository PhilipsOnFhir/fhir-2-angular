import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_NarrativeStatusEnum } from './R5_NarrativeStatusEnum'

export class R5_Narrative      extends R5_Element
{

   static def : string = 'Narrative';
   status : R5_NarrativeStatusEnum ;
   null : string ;
}
