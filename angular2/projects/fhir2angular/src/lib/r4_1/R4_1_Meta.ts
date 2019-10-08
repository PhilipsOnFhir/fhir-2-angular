import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_Meta      extends R4_1_Element
{

   static def : string = 'Meta';
   versionId : string ;
   lastUpdated : string ;
   source : string ;
   profile : string [];
   security : R4_1_Coding [];
   tag : R4_1_Coding [];
}
