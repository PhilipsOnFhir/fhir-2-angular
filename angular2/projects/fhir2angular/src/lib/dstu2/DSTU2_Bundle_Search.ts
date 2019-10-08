import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SearchEntryModeEnum } from './DSTU2_SearchEntryModeEnum'

export class DSTU2_Bundle_Search      extends DSTU2_BackboneElement
{

   static def : string = 'Bundle_Search';
   mode : DSTU2_SearchEntryModeEnum ;
   score : string ;
}
