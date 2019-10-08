import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SearchEntryModeEnum } from './R4_1_SearchEntryModeEnum'

export class R4_1_Bundle_Search      extends R4_1_BackboneElement
{

   static def : string = 'Bundle_Search';
   mode : R4_1_SearchEntryModeEnum ;
   score : string ;
}
