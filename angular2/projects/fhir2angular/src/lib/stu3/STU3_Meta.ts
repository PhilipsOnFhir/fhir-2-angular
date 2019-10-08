import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_Meta      extends STU3_Element
{

   static def : string = 'Meta';
   versionId : string ;
   lastUpdated : string ;
   profile : string [];
   security : STU3_Coding [];
   tag : STU3_Coding [];
}
