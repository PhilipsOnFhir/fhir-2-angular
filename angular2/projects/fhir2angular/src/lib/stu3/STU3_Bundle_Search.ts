import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_SearchEntryModeEnum } from './STU3_SearchEntryModeEnum'

export class STU3_Bundle_Search      extends STU3_BackboneElement
{

   static def : string = 'Bundle_Search';
   mode : STU3_SearchEntryModeEnum ;
   score : string ;
}
