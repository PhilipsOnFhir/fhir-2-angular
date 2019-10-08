import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_Meta      extends R4_Element
{

   static def : string = 'Meta';
   versionId : string ;
   lastUpdated : string ;
   source : string ;
   profile : string [];
   security : R4_Coding [];
   tag : R4_Coding [];
}
