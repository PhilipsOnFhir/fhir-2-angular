import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_Period      extends DSTU2_Element
{

   static def : string = 'Period';
   start : string ;
   end : string ;
}
