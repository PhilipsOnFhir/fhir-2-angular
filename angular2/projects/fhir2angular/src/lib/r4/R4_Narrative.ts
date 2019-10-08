import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_NarrativeStatusEnum } from './R4_NarrativeStatusEnum'

export class R4_Narrative      extends R4_Element
{

   static def : string = 'Narrative';
   status : R4_NarrativeStatusEnum ;
   null : string ;
}
