import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_NarrativeStatusEnum } from './R4_1_NarrativeStatusEnum'

export class R4_1_Narrative      extends R4_1_Element
{

   static def : string = 'Narrative';
   status : R4_1_NarrativeStatusEnum ;
   null : string ;
}
