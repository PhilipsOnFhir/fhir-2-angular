import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ObservationRelationshipTypeEnum } from './R4_ObservationRelationshipTypeEnum'
import { R4_Reference } from './R4_Reference'

export class R4_Observation_Related      extends R4_BackboneElement
{

   static def : string = 'Observation_Related';
   type : R4_ObservationRelationshipTypeEnum ;
   target : R4_Reference ;
}
