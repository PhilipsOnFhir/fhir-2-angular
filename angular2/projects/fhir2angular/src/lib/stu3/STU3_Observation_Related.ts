import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ObservationRelationshipTypeEnum } from './STU3_ObservationRelationshipTypeEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Observation_Related      extends STU3_BackboneElement
{

   static def : string = 'Observation_Related';
   type : STU3_ObservationRelationshipTypeEnum ;
   target : STU3_Reference ;
}
