import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TopicFilterByMatchTypeEnum } from './TopicFilterByMatchTypeEnum'

export class Topic_CanFilterBy      extends BackboneElement
{

   static def : string = 'Topic_CanFilterBy';
   name : string ;
   matchType : TopicFilterByMatchTypeEnum [];
   documentation : string ;
}
