import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ModuleMetadataStatusEnum } from './STU3_ModuleMetadataStatusEnum'
import { STU3_ModuleMetadataTypeEnum } from './STU3_ModuleMetadataTypeEnum'
import { STU3_ModuleMetadata_Contributor } from './STU3_ModuleMetadata_Contributor'
import { STU3_ModuleMetadata_Coverage } from './STU3_ModuleMetadata_Coverage'
import { STU3_ModuleMetadata_RelatedResource } from './STU3_ModuleMetadata_RelatedResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ModuleMetadata      extends STU3_DomainResource
{

   static def : string = 'ModuleMetadata';
   identifier : STU3_Identifier [];
   version : string ;
   title : string ;
   type : STU3_ModuleMetadataTypeEnum ;
   status : STU3_ModuleMetadataStatusEnum ;
   description : string ;
   purpose : string ;
   usage : string ;
   publicationDate : string ;
   lastReviewDate : string ;
   effectivePeriod : STU3_Period ;
   coverage : STU3_ModuleMetadata_Coverage [];
   topic : STU3_CodeableConcept [];
   keyword : string [];
   contributor : STU3_ModuleMetadata_Contributor [];
   publisher : STU3_Reference ;
   steward : STU3_Reference ;
   rightsDeclaration : string ;
   relatedResource : STU3_ModuleMetadata_RelatedResource [];
}
