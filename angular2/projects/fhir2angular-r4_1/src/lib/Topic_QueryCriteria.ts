import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Topic_QueryCriteria      extends BackboneElement
{

   static def : string = 'Topic_QueryCriteria';
   previous : string ;
   current : string ;
   requireBoth : boolean ;
}
