import { R5_Attachment } from './R5_Attachment'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_RelatedArtifactTypeEnum } from './R5_RelatedArtifactTypeEnum'

export class R5_RelatedArtifact      extends R5_Element
{

   static def : string = 'RelatedArtifact';
   type : R5_RelatedArtifactTypeEnum ;
   label : string ;
   display : string ;
   citation : string ;
   url : string ;
   document : R5_Attachment ;
   resource : string ;
}
