import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_DocumentManifest_Related      extends R4_BackboneElement
{

   static def : string = 'DocumentManifest_Related';
   identifier : R4_Identifier ;
   ref : R4_Reference ;
}
