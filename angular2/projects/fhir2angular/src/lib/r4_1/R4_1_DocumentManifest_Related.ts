import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DocumentManifest_Related      extends R4_1_BackboneElement
{

   static def : string = 'DocumentManifest_Related';
   identifier : R4_1_Identifier ;
   ref : R4_1_Reference ;
}
