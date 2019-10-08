import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ObservationRelationshipTypeEnum } from './DSTU2_ObservationRelationshipTypeEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Observation_Related      extends DSTU2_BackboneElement
{

   static def : string = 'Observation_Related';
   type : DSTU2_ObservationRelationshipTypeEnum ;
   target : DSTU2_Reference ;
}
