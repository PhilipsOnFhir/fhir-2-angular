import { STU3_Attachment } from './STU3_Attachment'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RelatedArtifactTypeEnum } from './STU3_RelatedArtifactTypeEnum'

export class STU3_RelatedArtifact      extends STU3_Element
{

   static def : string = 'RelatedArtifact';
   type : STU3_RelatedArtifactTypeEnum ;
   display : string ;
   citation : string ;
   url : string ;
   document : STU3_Attachment ;
   resource : STU3_Reference ;
}
