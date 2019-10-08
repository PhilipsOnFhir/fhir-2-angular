import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_SortDirectionEnum } from './R5_SortDirectionEnum'

export class R5_DataRequirement_Sort      extends R5_Element
{

   static def : string = 'DataRequirement_Sort';
   path : string ;
   direction : R5_SortDirectionEnum ;
}
