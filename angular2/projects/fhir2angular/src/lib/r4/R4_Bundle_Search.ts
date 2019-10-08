import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SearchEntryModeEnum } from './R4_SearchEntryModeEnum'

export class R4_Bundle_Search      extends R4_BackboneElement
{

   static def : string = 'Bundle_Search';
   mode : R4_SearchEntryModeEnum ;
   score : string ;
}
