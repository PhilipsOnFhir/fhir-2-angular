import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DocumentManifest_Related      extends DSTU2_BackboneElement
{

   static def : string = 'DocumentManifest_Related';
   identifier : DSTU2_Identifier ;
   ref : DSTU2_Reference ;
}
