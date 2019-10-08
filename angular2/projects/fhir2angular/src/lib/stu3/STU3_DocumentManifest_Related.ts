import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DocumentManifest_Related      extends STU3_BackboneElement
{

   static def : string = 'DocumentManifest_Related';
   identifier : STU3_Identifier ;
   ref : STU3_Reference ;
}
