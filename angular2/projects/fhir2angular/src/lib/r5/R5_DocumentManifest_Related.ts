import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_DocumentManifest_Related      extends R5_BackboneElement
{

   static def : string = 'DocumentManifest_Related';
   identifier : R5_Identifier ;
   ref : R5_Reference ;
}
