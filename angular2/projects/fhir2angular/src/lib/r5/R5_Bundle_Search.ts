import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SearchEntryModeEnum } from './R5_SearchEntryModeEnum'

export class R5_Bundle_Search      extends R5_BackboneElement
{

   static def : string = 'Bundle_Search';
   mode : R5_SearchEntryModeEnum ;
   score : string ;
}
