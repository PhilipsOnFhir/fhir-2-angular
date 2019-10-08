import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { InteractionTriggerEnum } from './InteractionTriggerEnum'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { Topic_QueryCriteria } from './Topic_QueryCriteria'

export class Topic_ResourceTrigger      extends BackboneElement
{

   static def : string = 'Topic_ResourceTrigger';
   description : string ;
   resourceType : ResourceTypeEnum [];
   methodCriteria : InteractionTriggerEnum [];
   queryCriteria : Topic_QueryCriteria ;
   fhirPathCriteria : string ;
}
