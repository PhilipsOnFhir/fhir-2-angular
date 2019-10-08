import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_Meta      extends R5_Element
{

   static def : string = 'Meta';
   versionId : string ;
   lastUpdated : string ;
   source : string ;
   profile : string [];
   security : R5_Coding [];
   tag : R5_Coding [];
}
