import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_Meta      extends DSTU2_Element
{

   static def : string = 'Meta';
   versionId : string ;
   lastUpdated : string ;
   profile : string [];
   security : DSTU2_Coding [];
   tag : DSTU2_Coding [];
}
