import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_SortDirectionEnum } from './R4_SortDirectionEnum'

export class R4_DataRequirement_Sort      extends R4_Element
{

   static def : string = 'DataRequirement_Sort';
   path : string ;
   direction : R4_SortDirectionEnum ;
}
