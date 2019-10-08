import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { Contributor } from './Contributor'
import { DomainResource } from './DomainResource'
import { Evidence_Certainty } from './Evidence_Certainty'
import { Evidence_ReferentGroup } from './Evidence_ReferentGroup'
import { Evidence_VariableDefinition } from './Evidence_VariableDefinition'
import { Identifier } from './Identifier'
import { OrderedDistribution } from './OrderedDistribution'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { RelatedArtifact } from './RelatedArtifact'
import { Statistic } from './Statistic'
import { UsageContext } from './UsageContext'

export class Evidence      extends DomainResource
{

   static def : string = 'Evidence';
   url : string ;
   identifier : Identifier [];
   version : string ;
   title : string ;
   status : PublicationStatusEnum ;
   useContext : UsageContext [];
   date : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   contributor : Contributor [];
   relatedArtifact : RelatedArtifact [];
   description : string ;
   assertion : string ;
   note : Annotation [];
   referentGroup : Evidence_ReferentGroup ;
   variableDefinition : Evidence_VariableDefinition [];
   synthesisType : CodeableConcept ;
   studyType : CodeableConcept ;
   statistic : Statistic [];
   distribution : OrderedDistribution [];
   certainty : Evidence_Certainty [];
}
