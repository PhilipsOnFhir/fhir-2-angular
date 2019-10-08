import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_SortDirectionEnum } from './R4_1_SortDirectionEnum'

export class R4_1_DataRequirement_Sort      extends R4_1_Element
{

   static def : string = 'DataRequirement_Sort';
   path : string ;
   direction : R4_1_SortDirectionEnum ;
}
