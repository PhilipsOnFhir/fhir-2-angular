import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_NarrativeStatusEnum } from './STU3_NarrativeStatusEnum'

export class STU3_Narrative      extends STU3_Element
{

   static def : string = 'Narrative';
   status : STU3_NarrativeStatusEnum ;
   null : string ;
}
