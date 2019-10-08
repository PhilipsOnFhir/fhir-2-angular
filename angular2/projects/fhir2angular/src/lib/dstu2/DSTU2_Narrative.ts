import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_NarrativeStatusEnum } from './DSTU2_NarrativeStatusEnum'

export class DSTU2_Narrative      extends DSTU2_Element
{

   static def : string = 'Narrative';
   status : DSTU2_NarrativeStatusEnum ;
   null : string ;
}
