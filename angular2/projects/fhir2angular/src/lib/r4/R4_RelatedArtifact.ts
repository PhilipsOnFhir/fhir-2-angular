import { R4_Attachment } from './R4_Attachment'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_RelatedArtifactTypeEnum } from './R4_RelatedArtifactTypeEnum'

export class R4_RelatedArtifact      extends R4_Element
{

   static def : string = 'RelatedArtifact';
   type : R4_RelatedArtifactTypeEnum ;
   label : string ;
   display : string ;
   citation : string ;
   url : string ;
   document : R4_Attachment ;
   resource : string ;
}
