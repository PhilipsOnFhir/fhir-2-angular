import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_RelatedArtifactTypeEnum } from './R4_1_RelatedArtifactTypeEnum'

export class R4_1_RelatedArtifact      extends R4_1_Element
{

   static def : string = 'RelatedArtifact';
   type : R4_1_RelatedArtifactTypeEnum ;
   label : string ;
   display : string ;
   citation : string ;
   url : string ;
   document : R4_1_Attachment ;
   resource : string ;
}
